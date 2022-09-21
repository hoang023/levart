import React, { useState, useEffect, useRef, memo } from "react";
import classNames from "classnames/bind";
import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "@/components/General/Popper";
import SearchItem from "./SearchItem";
import {
  attractionsState$,
  foodAndDrinksState$,
  hotelsState$,
  placesState$,
  provincesState$,
} from "@/redux/selectors";
import { useSelector } from "react-redux";
import { useDebounce } from "@/hooks";

const cx = classNames.bind(styles);

function Search({ large = false, className, tippyWidth, parentCallback }) {
  // inputRef.current.focus();
  // console.log("parentCallback", parentCallback);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [callback, setCallback] = useState(parentCallback);

  const provinces = useSelector(provincesState$);
  const places = useSelector(placesState$);
  const attractions = useSelector(attractionsState$);
  const foodAndDrinks = useSelector(foodAndDrinksState$);
  const hotels = useSelector(hotelsState$);

  const debounced = useDebounce(searchValue, 500);
  const inputRef = useRef();

  // console.log("on CLick", onClick);
  // onClick();
  const filter = (searchValue, path) => {
    let dataSearch = [];
    if (path !== undefined) {
      dataSearch = provinces.concat(places);
    } else {
      dataSearch = provinces.concat(places, attractions, foodAndDrinks, hotels);
    }
    const result = dataSearch.filter((value) =>
      value.name
        .toLowerCase()
        .replaceAll(" ", "")
        .includes(searchValue.toLowerCase().replaceAll(" ", ""))
    );
    return result;
  };

  useEffect(() => {
    if (parentCallback !== undefined) {
      inputRef.current.focus();
      setCallback(parentCallback);
    }
  }, [parentCallback]);

  useEffect(() => {
    if (!debounced.trim()) {
      if (callback !== undefined) {
        setCallback();
      }
      setSearchResult([]);
      return;
    }

    // console.log("callback", callback);

    const result = filter(debounced, callback);
    setSearchResult(result);
  }, [debounced, parentCallback]);

  const handleHideResult = () => {
    setShowResult(false);
    setCallback();
    // parentCallback = undefined;
  };

  const classes = cx("search", {
    [className]: className,
    large,
  });
  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        placement="bottom"
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div
            style={{ width: tippyWidth }}
            className={cx("search-result")}
            tabIndex="-1"
            {...attrs}
          >
            <PopperWrapper>
              {searchResult.slice(0, 40).map((value) => (
                <SearchItem
                  key={value._id}
                  data={value}
                  onClick={() => {
                    setSearchValue("");
                    setSearchResult([]);
                  }}
                  path={callback}
                />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div style={{ width: tippyWidth }} className={classes}>
          <button className={cx("search-btn")}>
            <BsSearch />
          </button>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Where to?"
            spellCheck={false}
            onFocus={() => {
              setShowResult(true);
            }}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default memo(Search);
