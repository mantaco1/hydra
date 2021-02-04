(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{114:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return u})),n.d(e,"default",(function(){return f}));var r=n(3),o=n(8),i=(n(0),n(268)),a=n(277),c={id:"structured_config",title:"Structured Configs example",sidebar_label:"Structured Configs example"},s={unversionedId:"patterns/instantiate_objects/structured_config",id:"patterns/instantiate_objects/structured_config",isDocsHomePage:!1,title:"Structured Configs example",description:"This example demonstrates the use of Structured Configs to instantiated objects.",source:"@site/docs/patterns/instantiate_objects/structured_config.md",slug:"/patterns/instantiate_objects/structured_config",permalink:"/docs/next/patterns/instantiate_objects/structured_config",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/instantiate_objects/structured_config.md",version:"current",lastUpdatedBy:"John Knox",lastUpdatedAt:1612463125,sidebar_label:"Structured Configs example",sidebar:"docs",previous:{title:"Config files example",permalink:"/docs/next/patterns/instantiate_objects/config_files"},next:{title:"Extending Configs",permalink:"/docs/next/patterns/extending_configs"}},u=[],l={toc:u};function f(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)(a.a,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"This example demonstrates the use of Structured Configs to instantiated objects."),Object(i.b)("h4",{id:"example-usage"},"Example usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'}),'class DBConnection:\n    def __init__(self, driver: str, host: str, port: int) -> None:\n        self.driver = driver\n        self.host = host\n        self.port = port\n\n    def connect(self) -> None:\n        print(f"{self.driver} connecting to {self.host}")\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, driver: str, host: str, port: int) -> None:\n        super().__init__(driver=driver, host=host, port=port)\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, driver: str, host: str, port: int, timeout: int) -> None:\n        super().__init__(driver=driver, host=host, port=port)\n        self.timeout = timeout\n\n@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = 80\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    _target_: str = "my_app.MySQLConnection"\n    driver: str = "MySQL"\n    port: int = 1234\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    _target_: str = "my_app.PostgreSQLConnection"\n    driver: str = "PostgreSQL"\n    port: int = 5678\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    defaults: List[Any] = field(default_factory=lambda: [{"db": "mysql"}])\n    db: DBConfig = MISSING\n\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    connection = instantiate(cfg.db)\n    connection.connect()\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("h4",{id:"sample-output"},"Sample Output"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python my_app.py\nMySQL connecting to localhost:1234\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ python my_app.py db=postgresql\nPostgreSQL connecting to localhost:5678\n")))))}f.isMDXComponent=!0},268:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),l=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},f=function(t){var e=l(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},p=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=l(n),p=r,g=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return n?o.a.createElement(g,c(c({ref:e},u),{},{components:n})):o.a.createElement(g,c({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},269:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},270:function(t,e,n){"use strict";n.r(e);var r=n(11);n.d(e,"MemoryRouter",(function(){return r.d})),n.d(e,"Prompt",(function(){return r.f})),n.d(e,"Redirect",(function(){return r.g})),n.d(e,"Route",(function(){return r.h})),n.d(e,"Router",(function(){return r.i})),n.d(e,"StaticRouter",(function(){return r.j})),n.d(e,"Switch",(function(){return r.k})),n.d(e,"generatePath",(function(){return r.l})),n.d(e,"matchPath",(function(){return r.m})),n.d(e,"useHistory",(function(){return r.n})),n.d(e,"useLocation",(function(){return r.o})),n.d(e,"useParams",(function(){return r.p})),n.d(e,"useRouteMatch",(function(){return r.q})),n.d(e,"withRouter",(function(){return r.r})),n.d(e,"BrowserRouter",(function(){return r.a})),n.d(e,"HashRouter",(function(){return r.b})),n.d(e,"Link",(function(){return r.c})),n.d(e,"NavLink",(function(){return r.e}))},271:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(11),a=n(269),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(272),l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,n,f,d=t.isNavLink,p=t.to,g=t.href,v=t.activeClassName,b=t.isActive,m=t["data-noBrokenLinkCheck"],h=t.autoAddBaseUrl,y=void 0===h||h,O=l(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,_=Object(r.useContext)(s),D=p||g,w=Object(a.a)(D),x=null==D?void 0:D.replace("pathname://",""),C=void 0!==x?(n=x,y&&function(t){return t.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),S=d?i.e:i.c,L=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!L&&w&&window.docusaurus.prefetch(C),function(){L&&f&&f.disconnect()}}),[C,L,w]);var A=null!==(e=null==C?void 0:C.startsWith("#"))&&void 0!==e&&e,E=!C||!w||A;return C&&w&&!A&&!m&&_.collectLink(C),E?o.a.createElement("a",Object.assign({href:C},D&&!w&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(S,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(C),P.current=!0)},innerRef:function(t){var e,n;L&&t&&w&&(e=t,n=function(){window.docusaurus.prefetch(C)},(f=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(e),f.disconnect(),n())}))}))).observe(e))},to:C||""},d&&{isActive:b,activeClassName:v}))}},272:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n(21),o=n(269);function i(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return e+n;var l=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+l:l}(i,n,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},273:function(t,e,n){try{t.exports=n(274)}catch(r){t.exports={}}},274:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePluginAndVersion=e.useActivePlugin=e.useDocsData=e.useAllDocsData=void 0;var r=n(270),o=n(275),i=n(276);e.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},e.useDocsData=function(t){return o.usePluginData("docusaurus-plugin-content-docs",t)},e.useActivePlugin=function(t){void 0===t&&(t={});var n=e.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(n,o,t)},e.useActivePluginAndVersion=function(t){void 0===t&&(t={});var n=e.useActivePlugin(t),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}},e.useVersions=function(t){return e.useDocsData(t).versions},e.useLatestVersion=function(t){var n=e.useDocsData(t);return i.getLatestVersion(n)},e.useActiveVersion=function(t){var n=e.useDocsData(t),o=r.useLocation().pathname;return i.getActiveVersion(n,o)},e.useActiveDocContext=function(t){var n=e.useDocsData(t),o=r.useLocation().pathname;return i.getActiveDocContext(n,o)},e.useDocVersionSuggestions=function(t){var n=e.useDocsData(t),o=r.useLocation().pathname;return i.getDocVersionSuggestions(n,o)}},275:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o})),n.d(e,"useAllPluginInstancesData",(function(){return i})),n.d(e,"usePluginData",(function(){return a}));var r=n(21);function o(){var t=Object(r.default)().globalData;if(!t)throw new Error("Docusaurus global data not found");return t}function i(t){var e=o()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function a(t,e){void 0===e&&(e="default");var n=i(t)[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+t+" and pluginId="+e);return n}},276:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;var r=n(270);e.getActivePlugin=function(t,e,n){void 0===n&&(n={});var o=Object.entries(t).find((function(t){t[0];var n=t[1];return!!r.matchPath(e,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+e+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(t).map((function(t){return t.path})).join(", "));return i},e.getLatestVersion=function(t){return t.versions.find((function(t){return t.isLast}))},e.getActiveVersion=function(t,n){var o=e.getLatestVersion(t);return[].concat(t.versions.filter((function(t){return t!==o})),[o]).find((function(t){return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})}))},e.getActiveDocContext=function(t,n){var o,i,a=e.getActiveVersion(t,n),c=null==a?void 0:a.docs.find((function(t){return!!r.matchPath(n,{path:t.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(o=c.id,i={},t.versions.forEach((function(t){t.docs.forEach((function(e){e.id===o&&(i[t.name]=e)}))})),i):{}}},e.getDocVersionSuggestions=function(t,n){var r=e.getLatestVersion(t),o=e.getActiveDocContext(t,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},277:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n(3),o=n(0),i=n.n(o),a=n(271),c=n(21),s=n(273);function u(t){return i.a.createElement(a.a,Object(r.a)({},t,{to:(e=t.to,o=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+e),target:"_blank"}));var e,n,o}function l(t){var e,n=null!==(e=t.text)&&void 0!==e?e:"Example";return i.a.createElement(u,t,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);