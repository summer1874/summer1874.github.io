const l=JSON.parse('{"key":"v-7905c0e8","path":"/front-end-engineer/frameworks-and-class-libraries/typescript.html","title":"TypeScript \u7B80\u4ECB","lang":"zh-CN","frontmatter":{"date":"2019-12-06T00:00:00.000Z","categories":["\u6846\u67B6\u548C\u7C7B\u5E93"],"tags":["TypeScript\xE7"],"summary":"# TypeScript \u7B80\u4ECB\\nTypeScript \u6307\u5357","head":[["meta",{"property":"og:url","content":"https://summer1874.top/front-end-engineer/frameworks-and-class-libraries/typescript.html"}],["meta",{"property":"og:title","content":"TypeScript \u7B80\u4ECB"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-23T08:59:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"TypeScript\xE7"}],["meta",{"property":"article:published_time","content":"2019-12-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-23T08:59:31.000Z"}]]},"excerpt":"<h1 id=\\"typescript-\u7B80\u4ECB\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#typescript-\u7B80\u4ECB\\" aria-hidden=\\"true\\">#</a> TypeScript \u7B80\u4ECB</h1>\\n<more>TypeScript \u6307\u5357</more>","headers":[{"level":2,"title":"\u4EC0\u4E48\u662F TypeScript","slug":"\u4EC0\u4E48\u662F-typescript","link":"#\u4EC0\u4E48\u662F-typescript","children":[{"level":3,"title":"\u4E3A\u4EC0\u4E48\u9009\u62E9 TypeScript","slug":"\u4E3A\u4EC0\u4E48\u9009\u62E9-typescript","link":"#\u4E3A\u4EC0\u4E48\u9009\u62E9-typescript","children":[]},{"level":3,"title":"TypeScript \u975E\u5E38\u5305\u5BB9","slug":"typescript-\u975E\u5E38\u5305\u5BB9","link":"#typescript-\u975E\u5E38\u5305\u5BB9","children":[]},{"level":3,"title":"TypeScript \u62E5\u6709\u6D3B\u8DC3\u7684\u793E\u533A","slug":"typescript-\u62E5\u6709\u6D3B\u8DC3\u7684\u793E\u533A","link":"#typescript-\u62E5\u6709\u6D3B\u8DC3\u7684\u793E\u533A","children":[]},{"level":3,"title":"TypeScript \u7684\u7F3A\u70B9","slug":"typescript-\u7684\u7F3A\u70B9","link":"#typescript-\u7684\u7F3A\u70B9","children":[]}]},{"level":2,"title":"\u5B89\u88C5 TypeScript","slug":"\u5B89\u88C5-typescript","link":"#\u5B89\u88C5-typescript","children":[{"level":3,"title":"\u7F16\u8F91\u5668","slug":"\u7F16\u8F91\u5668","link":"#\u7F16\u8F91\u5668","children":[]}]},{"level":2,"title":"\u539F\u59CB\u6570\u636E\u7C7B\u578B","slug":"\u539F\u59CB\u6570\u636E\u7C7B\u578B","link":"#\u539F\u59CB\u6570\u636E\u7C7B\u578B","children":[{"level":3,"title":"\u5E03\u5C14\u503C","slug":"\u5E03\u5C14\u503C","link":"#\u5E03\u5C14\u503C","children":[]},{"level":3,"title":"\u6570\u503C","slug":"\u6570\u503C","link":"#\u6570\u503C","children":[]},{"level":3,"title":"\u5B57\u7B26\u4E32","slug":"\u5B57\u7B26\u4E32","link":"#\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"\u7A7A\u503C","slug":"\u7A7A\u503C","link":"#\u7A7A\u503C","children":[]},{"level":3,"title":"Null \u548C Undefined","slug":"null-\u548C-undefined","link":"#null-\u548C-undefined","children":[]}]},{"level":2,"title":"\u4EFB\u610F\u503C","slug":"\u4EFB\u610F\u503C","link":"#\u4EFB\u610F\u503C","children":[{"level":3,"title":"\u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B","slug":"\u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B","link":"#\u4EC0\u4E48\u662F\u4EFB\u610F\u503C\u7C7B\u578B","children":[]},{"level":3,"title":"\u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"\u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5","link":"#\u4EFB\u610F\u503C\u7684\u5C5E\u6027\u548C\u65B9\u6CD5","children":[]},{"level":3,"title":"\u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF","slug":"\u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF","link":"#\u672A\u58F0\u660E\u7C7B\u578B\u7684\u53D8\u91CF","children":[]}]},{"level":2,"title":"\u7C7B\u578B\u63A8\u8BBA","slug":"\u7C7B\u578B\u63A8\u8BBA","link":"#\u7C7B\u578B\u63A8\u8BBA","children":[{"level":3,"title":"\u4EC0\u4E48\u662F\u7C7B\u578B\u63A8\u8BBA","slug":"\u4EC0\u4E48\u662F\u7C7B\u578B\u63A8\u8BBA","link":"#\u4EC0\u4E48\u662F\u7C7B\u578B\u63A8\u8BBA","children":[]}]},{"level":2,"title":"\u8054\u5408\u7C7B\u578B","slug":"\u8054\u5408\u7C7B\u578B","link":"#\u8054\u5408\u7C7B\u578B","children":[{"level":3,"title":"\u7B80\u5355\u7684\u4F8B\u5B50","slug":"\u7B80\u5355\u7684\u4F8B\u5B50","link":"#\u7B80\u5355\u7684\u4F8B\u5B50","children":[]},{"level":3,"title":"\u8BBF\u95EE\u8054\u5408\u7C7B\u578B\u7684\u5C5E\u6027\u6216\u65B9\u6CD5","slug":"\u8BBF\u95EE\u8054\u5408\u7C7B\u578B\u7684\u5C5E\u6027\u6216\u65B9\u6CD5","link":"#\u8BBF\u95EE\u8054\u5408\u7C7B\u578B\u7684\u5C5E\u6027\u6216\u65B9\u6CD5","children":[]}]},{"level":2,"title":"\u5BF9\u8C61\u7684\u7C7B\u578B\u2014\u2014\u63A5\u53E3","slug":"\u5BF9\u8C61\u7684\u7C7B\u578B\u2014\u2014\u63A5\u53E3","link":"#\u5BF9\u8C61\u7684\u7C7B\u578B\u2014\u2014\u63A5\u53E3","children":[{"level":3,"title":"\u4EC0\u4E48\u662F\u63A5\u53E3","slug":"\u4EC0\u4E48\u662F\u63A5\u53E3","link":"#\u4EC0\u4E48\u662F\u63A5\u53E3","children":[]},{"level":3,"title":"\u7B80\u5355\u7684\u4F8B\u5B50","slug":"\u7B80\u5355\u7684\u4F8B\u5B50-1","link":"#\u7B80\u5355\u7684\u4F8B\u5B50-1","children":[]},{"level":3,"title":"\u53EF\u9009\u5C5E\u6027","slug":"\u53EF\u9009\u5C5E\u6027","link":"#\u53EF\u9009\u5C5E\u6027","children":[]},{"level":3,"title":"\u4EFB\u610F\u5C5E\u6027","slug":"\u4EFB\u610F\u5C5E\u6027","link":"#\u4EFB\u610F\u5C5E\u6027","children":[]},{"level":3,"title":"\u53EA\u8BFB\u5C5E\u6027","slug":"\u53EA\u8BFB\u5C5E\u6027","link":"#\u53EA\u8BFB\u5C5E\u6027","children":[]}]},{"level":2,"title":"\u6570\u7EC4\u7684\u7C7B\u578B","slug":"\u6570\u7EC4\u7684\u7C7B\u578B","link":"#\u6570\u7EC4\u7684\u7C7B\u578B","children":[{"level":3,"title":"\u300C\u7C7B\u578B + \u65B9\u62EC\u53F7\u300D\u8868\u793A\u6CD5","slug":"\u300C\u7C7B\u578B-\u65B9\u62EC\u53F7\u300D\u8868\u793A\u6CD5","link":"#\u300C\u7C7B\u578B-\u65B9\u62EC\u53F7\u300D\u8868\u793A\u6CD5","children":[]},{"level":3,"title":"\u6570\u7EC4\u6CDB\u578B","slug":"\u6570\u7EC4\u6CDB\u578B","link":"#\u6570\u7EC4\u6CDB\u578B","children":[]},{"level":3,"title":"\u7528\u63A5\u53E3\u8868\u793A\u6570\u7EC4","slug":"\u7528\u63A5\u53E3\u8868\u793A\u6570\u7EC4","link":"#\u7528\u63A5\u53E3\u8868\u793A\u6570\u7EC4","children":[]},{"level":3,"title":"\u7C7B\u6570\u7EC4","slug":"\u7C7B\u6570\u7EC4","link":"#\u7C7B\u6570\u7EC4","children":[]},{"level":3,"title":"any \u5728\u6570\u7EC4\u4E2D\u7684\u5E94\u7528","slug":"any-\u5728\u6570\u7EC4\u4E2D\u7684\u5E94\u7528","link":"#any-\u5728\u6570\u7EC4\u4E2D\u7684\u5E94\u7528","children":[]}]},{"level":2,"title":"\u51FD\u6570\u7684\u7C7B\u578B","slug":"\u51FD\u6570\u7684\u7C7B\u578B","link":"#\u51FD\u6570\u7684\u7C7B\u578B","children":[{"level":3,"title":"\u51FD\u6570\u58F0\u660E","slug":"\u51FD\u6570\u58F0\u660E","link":"#\u51FD\u6570\u58F0\u660E","children":[]},{"level":3,"title":"\u51FD\u6570\u8868\u8FBE\u5F0F","slug":"\u51FD\u6570\u8868\u8FBE\u5F0F","link":"#\u51FD\u6570\u8868\u8FBE\u5F0F","children":[]},{"level":3,"title":"\u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7684\u5F62\u72B6","slug":"\u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7684\u5F62\u72B6","link":"#\u7528\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\u7684\u5F62\u72B6","children":[]},{"level":3,"title":"\u53EF\u9009\u53C2\u6570","slug":"\u53EF\u9009\u53C2\u6570","link":"#\u53EF\u9009\u53C2\u6570","children":[]},{"level":3,"title":"\u53C2\u6570\u9ED8\u8BA4\u503C","slug":"\u53C2\u6570\u9ED8\u8BA4\u503C","link":"#\u53C2\u6570\u9ED8\u8BA4\u503C","children":[]},{"level":3,"title":"\u5269\u4F59\u53C2\u6570","slug":"\u5269\u4F59\u53C2\u6570","link":"#\u5269\u4F59\u53C2\u6570","children":[]},{"level":3,"title":"\u91CD\u8F7D","slug":"\u91CD\u8F7D","link":"#\u91CD\u8F7D","children":[]}]},{"level":2,"title":"\u7C7B\u578B\u65AD\u8A00","slug":"\u7C7B\u578B\u65AD\u8A00","link":"#\u7C7B\u578B\u65AD\u8A00","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u4F8B\u5B50\uFF1A\u5C06\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u6307\u5B9A\u4E3A\u4E00\u4E2A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B","slug":"\u4F8B\u5B50-\u5C06\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u6307\u5B9A\u4E3A\u4E00\u4E2A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B","link":"#\u4F8B\u5B50-\u5C06\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u6307\u5B9A\u4E3A\u4E00\u4E2A\u66F4\u52A0\u5177\u4F53\u7684\u7C7B\u578B","children":[]}]},{"level":2,"title":"\u58F0\u660E\u6587\u4EF6","slug":"\u58F0\u660E\u6587\u4EF6","link":"#\u58F0\u660E\u6587\u4EF6","children":[]},{"level":2,"title":"\u5185\u7F6E\u5BF9\u8C61","slug":"\u5185\u7F6E\u5BF9\u8C61","link":"#\u5185\u7F6E\u5BF9\u8C61","children":[{"level":3,"title":"ECMAScript \u7684\u5185\u7F6E\u5BF9\u8C61","slug":"ecmascript-\u7684\u5185\u7F6E\u5BF9\u8C61","link":"#ecmascript-\u7684\u5185\u7F6E\u5BF9\u8C61","children":[]},{"level":3,"title":"DOM \u548C BOM \u7684\u5185\u7F6E\u5BF9\u8C61","slug":"dom-\u548C-bom-\u7684\u5185\u7F6E\u5BF9\u8C61","link":"#dom-\u548C-bom-\u7684\u5185\u7F6E\u5BF9\u8C61","children":[]}]},{"level":2,"title":"TypeScript \u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6","slug":"typescript-\u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6","link":"#typescript-\u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6","children":[{"level":3,"title":"\u7528 TypeScript \u5199 Node.js","slug":"\u7528-typescript-\u5199-node-js","link":"#\u7528-typescript-\u5199-node-js","children":[]}]},{"level":2,"title":"\u7C7B\u578B\u522B\u540D","slug":"\u7C7B\u578B\u522B\u540D","link":"#\u7C7B\u578B\u522B\u540D","children":[{"level":3,"title":"\u7B80\u5355\u7684\u4F8B\u5B50","slug":"\u7B80\u5355\u7684\u4F8B\u5B50-2","link":"#\u7B80\u5355\u7684\u4F8B\u5B50-2","children":[]}]},{"level":2,"title":"\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B","slug":"\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B","link":"#\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B","children":[{"level":3,"title":"\u7B80\u5355\u7684\u4F8B\u5B50","slug":"\u7B80\u5355\u7684\u4F8B\u5B50-3","link":"#\u7B80\u5355\u7684\u4F8B\u5B50-3","children":[]}]},{"level":2,"title":"\u5143\u7EC4","slug":"\u5143\u7EC4","link":"#\u5143\u7EC4","children":[{"level":3,"title":"\u7B80\u5355\u7684\u4F8B\u5B50","slug":"\u7B80\u5355\u7684\u4F8B\u5B50-4","link":"#\u7B80\u5355\u7684\u4F8B\u5B50-4","children":[]},{"level":3,"title":"\u8D8A\u754C\u7684\u5143\u7D20","slug":"\u8D8A\u754C\u7684\u5143\u7D20","link":"#\u8D8A\u754C\u7684\u5143\u7D20","children":[]}]},{"level":2,"title":"\u679A\u4E3E","slug":"\u679A\u4E3E","link":"#\u679A\u4E3E","children":[{"level":3,"title":"\u7B80\u5355\u7684\u4F8B\u5B50","slug":"\u7B80\u5355\u7684\u4F8B\u5B50-5","link":"#\u7B80\u5355\u7684\u4F8B\u5B50-5","children":[]},{"level":3,"title":"\u624B\u52A8\u8D4B\u503C","slug":"\u624B\u52A8\u8D4B\u503C","link":"#\u624B\u52A8\u8D4B\u503C","children":[]},{"level":3,"title":"\u5E38\u6570\u9879\u548C\u8BA1\u7B97\u6240\u5F97\u9879","slug":"\u5E38\u6570\u9879\u548C\u8BA1\u7B97\u6240\u5F97\u9879","link":"#\u5E38\u6570\u9879\u548C\u8BA1\u7B97\u6240\u5F97\u9879","children":[]},{"level":3,"title":"\u5E38\u6570\u679A\u4E3E","slug":"\u5E38\u6570\u679A\u4E3E","link":"#\u5E38\u6570\u679A\u4E3E","children":[]},{"level":3,"title":"\u5916\u90E8\u679A\u4E3E","slug":"\u5916\u90E8\u679A\u4E3E","link":"#\u5916\u90E8\u679A\u4E3E","children":[]}]},{"level":2,"title":"\u7C7B","slug":"\u7C7B","link":"#\u7C7B","children":[{"level":3,"title":"\u7C7B\u7684\u6982\u5FF5","slug":"\u7C7B\u7684\u6982\u5FF5","link":"#\u7C7B\u7684\u6982\u5FF5","children":[]},{"level":3,"title":"ES6 \u4E2D\u7C7B\u7684\u7528\u6CD5","slug":"es6-\u4E2D\u7C7B\u7684\u7528\u6CD5","link":"#es6-\u4E2D\u7C7B\u7684\u7528\u6CD5","children":[]},{"level":3,"title":"ES7 \u4E2D\u7C7B\u7684\u7528\u6CD5","slug":"es7-\u4E2D\u7C7B\u7684\u7528\u6CD5","link":"#es7-\u4E2D\u7C7B\u7684\u7528\u6CD5","children":[]},{"level":3,"title":"TypeScript \u4E2D\u7C7B\u7684\u7528\u6CD5","slug":"typescript-\u4E2D\u7C7B\u7684\u7528\u6CD5","link":"#typescript-\u4E2D\u7C7B\u7684\u7528\u6CD5","children":[]},{"level":3,"title":"\u7C7B\u7684\u7C7B\u578B","slug":"\u7C7B\u7684\u7C7B\u578B","link":"#\u7C7B\u7684\u7C7B\u578B","children":[]}]},{"level":2,"title":"\u7C7B\u4E0E\u63A5\u53E3","slug":"\u7C7B\u4E0E\u63A5\u53E3","link":"#\u7C7B\u4E0E\u63A5\u53E3","children":[{"level":3,"title":"\u7C7B\u5B9E\u73B0\u63A5\u53E3","slug":"\u7C7B\u5B9E\u73B0\u63A5\u53E3","link":"#\u7C7B\u5B9E\u73B0\u63A5\u53E3","children":[]},{"level":3,"title":"\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3","slug":"\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3","link":"#\u63A5\u53E3\u7EE7\u627F\u63A5\u53E3","children":[]},{"level":3,"title":"\u63A5\u53E3\u7EE7\u627F\u7C7B","slug":"\u63A5\u53E3\u7EE7\u627F\u7C7B","link":"#\u63A5\u53E3\u7EE7\u627F\u7C7B","children":[]},{"level":3,"title":"\u6DF7\u5408\u7C7B\u578B","slug":"\u6DF7\u5408\u7C7B\u578B","link":"#\u6DF7\u5408\u7C7B\u578B","children":[]}]},{"level":2,"title":"\u6CDB\u578B","slug":"\u6CDB\u578B","link":"#\u6CDB\u578B","children":[{"level":3,"title":"\u7B80\u5355\u7684\u4F8B\u5B50","slug":"\u7B80\u5355\u7684\u4F8B\u5B50-6","link":"#\u7B80\u5355\u7684\u4F8B\u5B50-6","children":[]},{"level":3,"title":"\u591A\u4E2A\u7C7B\u578B\u53C2\u6570","slug":"\u591A\u4E2A\u7C7B\u578B\u53C2\u6570","link":"#\u591A\u4E2A\u7C7B\u578B\u53C2\u6570","children":[]},{"level":3,"title":"\u6CDB\u578B\u7EA6\u675F","slug":"\u6CDB\u578B\u7EA6\u675F","link":"#\u6CDB\u578B\u7EA6\u675F","children":[]},{"level":3,"title":"\u6CDB\u578B\u63A5\u53E3","slug":"\u6CDB\u578B\u63A5\u53E3","link":"#\u6CDB\u578B\u63A5\u53E3","children":[]},{"level":3,"title":"\u6CDB\u578B\u7C7B","slug":"\u6CDB\u578B\u7C7B","link":"#\u6CDB\u578B\u7C7B","children":[]},{"level":3,"title":"\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B","slug":"\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B","link":"#\u6CDB\u578B\u53C2\u6570\u7684\u9ED8\u8BA4\u7C7B\u578B","children":[]}]},{"level":2,"title":"\u58F0\u660E\u5408\u5E76","slug":"\u58F0\u660E\u5408\u5E76","link":"#\u58F0\u660E\u5408\u5E76","children":[{"level":3,"title":"\u51FD\u6570\u7684\u5408\u5E76","slug":"\u51FD\u6570\u7684\u5408\u5E76","link":"#\u51FD\u6570\u7684\u5408\u5E76","children":[]},{"level":3,"title":"\u63A5\u53E3\u7684\u5408\u5E76","slug":"\u63A5\u53E3\u7684\u5408\u5E76","link":"#\u63A5\u53E3\u7684\u5408\u5E76","children":[]},{"level":3,"title":"\u7C7B\u7684\u5408\u5E76","slug":"\u7C7B\u7684\u5408\u5E76","link":"#\u7C7B\u7684\u5408\u5E76","children":[]}]},{"level":2,"title":"\u6269\u5C55\u9605\u8BFB","slug":"\u6269\u5C55\u9605\u8BFB","link":"#\u6269\u5C55\u9605\u8BFB","children":[]}],"git":{"createdTime":1663923571000,"updatedTime":1663923571000,"contributors":[{"name":"Summer Su","email":"summer.mail1874@foxmail.com","commits":1}]},"readingTime":{"minutes":43.45,"words":13036},"filePathRelative":"front-end-engineer/frameworks-and-class-libraries/typescript.md","localizedDate":"2019\u5E7412\u67086\u65E5"}');export{l as data};
