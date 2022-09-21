import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./FilterList.module.scss";
import { GiKnifeFork } from "react-icons/gi";
import { MdHotel, MdPlace } from "react-icons/md";
import CardVertical from "../../Card/CardVertical";
import { attractionsState$, foodAndDrinksState$ } from "@/redux/selectors";
import { useSelector } from "react-redux";
import { MContext } from "@/components/Context/FilterContext";
import { Pagination } from "antd";

const cx = classNames.bind(styles);

function FilterList({ context, data }) {
  const [state, setState] = useState([]);
  const [current, setCurrent] = useState(1);
  const [numberSlice, setNumberSlice] = useState([0, 2]);

  const onChange = (page) => {
    setNumberSlice([
      numberSlice[0] + (page - current) * 2,
      numberSlice[1] + (page - current) * 2,
    ]);
    setCurrent(page);
  };

  const filter = (value, array) => {
    if (array.length !== 0) {
      let arrayData2 = [];

      value.data.map((item, index) => {
        if (array[0][value.title] !== undefined) {
          if (index === 0) {
            arrayData2 = array.filter(
              (arrays) => arrays[value.title][item] === true
            );
          } else {
            let arrayData = array.filter(
              (arrays) => arrays[value.title][item] === true
            );
            arrayData2 = Array.from(new Set([...arrayData2, ...arrayData]));
          }
        }
      });

      return arrayData2;
    }
    return array;
  };

  const apply = () => {
    if (context.length === 0) {
      let array = data.sort(function (a, b) {
        return b.evaluatePoint - a.evaluatePoint;
      });

      setState(array);
    } else if (context.length !== 0) {
      let array = data;

      context.map((value) => {
        //Price

        if (value.title === "Price") {
          array = array.filter(
            (item) =>
              item["price"] <= value.data[1] && item["price"] >= value.data[0]
          );
        }

        //Traveler rating
        else if (value.title === "evaluatePoint" || value.title === "star") {
          let arrayData2 = [];
          value.data.map((item, index) => {
            let numberItem = Number(item);

            if (index === 0) {
              arrayData2 = array.filter((arrays) => {
                if (numberItem === 2) {
                  if (
                    arrays[value.title] >= 0 &&
                    arrays[value.title] < numberItem + 1
                  ) {
                    return arrays;
                  }
                } else if (
                  arrays[value.title] >= numberItem &&
                  arrays[value.title] < numberItem + 1
                ) {
                  return arrays;
                }
              });
            } else {
              let arrayData = array.filter((arrays) => {
                if (numberItem === 2) {
                  if (
                    arrays[value.title] >= 0 &&
                    arrays[value.title] < numberItem + 1
                  ) {
                    return arrays;
                  }
                } else if (
                  arrays[value.title] >= numberItem &&
                  arrays[value.title] < numberItem + 1
                ) {
                  return arrays;
                }
              });
              arrayData2 = Array.from(new Set([...arrayData2, ...arrayData]));
            }
          });
          array = arrayData2;
        }

        //Property types
        else {
          array = filter(value, array);
        }
      });

      array = array.sort(function (a, b) {
        return b.evaluatePoint - a.evaluatePoint;
      });
      setState(array);
    }
  };

  useEffect(() => {
    apply();
  }, [data, context]);

  return (
    <div className={cx("wrapper")}>
      {state.slice(numberSlice[0], numberSlice[1]).map((value, index) => {
        return <CardVertical key={index} keys={index} value={value} />;
      })}
      {state.length !== 0 ? (
        <div className={cx("pagination")}>
          <Pagination
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultCurrent={current}
            onChange={onChange}
            total={state.length}
            pageSize={2}
          />
        </div>
      ) : null}
    </div>
  );
}

export default FilterList;
