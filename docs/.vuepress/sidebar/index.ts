import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端工程师的自我修养",
      icon: "light",
      prefix: "front-end-engineer/",
      children: [
        {
          text: "javaScript基础",
          prefix: "javascript-basics/",
          children: "structure"
        },
        {
          text: "HTML和CSS",
          prefix: "html-and-css/",
          children: "structure"
        },
        {
          text: "计算机基础",
          prefix: "computer-basics/",
          children: "structure"
        },
        {
          text: "数据结构和算法",
          prefix: "data-structures-and-algorithms/",
          children: "structure"
        },
        {
          text: "运行环境",
          prefix: "operating-environment/",
          children: "structure"
        },
        {
          text: "框架和类库",
          prefix: "frameworks-and-class-libraries/",
          children: "structure"
        },
        {
          text: "前端工程",
          prefix: "front-end-engineering/",
          children: "structure"
        },
        {
          text: "项目和业务",
          prefix: "projects-and-business/",
          children: "structure"
        },
      ]
    },
    "intro",
    "slides",
  ],
});