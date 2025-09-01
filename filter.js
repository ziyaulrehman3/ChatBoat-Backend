import { dataSet } from "./coursesData.js";
import FilteredData from "./FilteredData.js";
import fs from "fs";

const newData = dataSet.data.map((item) => {
  return {
    courseId: item.courseId,
    topics: item.topics.map((temp) => {
      if ([11, 12].includes(temp.classNumber)) {
        return {
          topicName: temp.topicName,
          classNumber: temp.classNumber,
        };
      }
    }),
  };
});

// newData.forEach((item) => console.log(item));

fs.writeFile("FilteredData2.js", JSON.stringify(newData, null, 2), (err) => {
  if (err) console.err(err);
});

// const newData = FilteredData.map((subject) => {
//   return {
//     subject: subject.courseId,
//     topics: subject.topics.map((item) => {
//       return {};
//     }),
//   };
// });
