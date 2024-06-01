import { data } from "@/store/techStack.js";

interface TechItem {
  label: string;
  url: string;
}

interface TechStack {
  lang: TechItem[];
  hosting: TechItem[];
  frameworks: TechItem[];
  servers: TechItem[];
  database: TechItem[];
  design: TechItem[];
  ml: TechItem[];
  cicd: TechItem[];
  others: TechItem[];
}

export const searchFilter = (search: string): TechStack => {
  // Creating an empty newData
  let newData: TechStack = {
    lang: [],
    hosting: [],
    frameworks: [],
    servers: [],
    database: [],
    design: [],
    ml: [],
    cicd: [],
    others: [],
  };

  // Filtering object using forEach loop
  Object.keys(data).forEach((key) => {
    const category = key as keyof TechStack;
    for (let i = 0; i < data[category].length; i++) {
      let label = data[category][i].label.toUpperCase();
      // converting search string to uppercase to avoid case errors
      let searchString = search.toUpperCase();
      // checking condition
      if (label.includes(searchString)) {
        newData[category].push(data[category][i]);
      }
    }
  });
  //   returns new data array (filtered)
  return newData;
};
