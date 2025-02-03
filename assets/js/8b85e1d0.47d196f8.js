"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[6890],{76865:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Integrations/Google/integrations-setup-google-cloud-vertex-ai-langflow","title":"Integrate Google Cloud Vertex AI with Langflow","description":"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langflow\'s Google components.","source":"@site/docs/Integrations/Google/integrations-setup-google-cloud-vertex-ai-langflow.md","sourceDirName":"Integrations/Google","slug":"/integrations-setup-google-cloud-vertex-ai-langflow","permalink":"/integrations-setup-google-cloud-vertex-ai-langflow","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Integrate Google Cloud Vertex AI with Langflow","slug":"/integrations-setup-google-cloud-vertex-ai-langflow","description":"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langflow\'s Google components."},"sidebar":"docs","previous":{"title":"Integrate Google OAuth with Langflow","permalink":"/integrations-setup-google-oauth-langflow"},"next":{"title":"Setup","permalink":"/integrations/notion/setup"}}');var r=o(74848),i=o(28453);const s={title:"Integrate Google Cloud Vertex AI with Langflow",slug:"/integrations-setup-google-cloud-vertex-ai-langflow",description:"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langflow's Google components."},c=void 0,a={},l=[{value:"Create a service account with Vertex AI access",id:"create-a-service-account-with-vertex-ai-access",level:2},{value:"Configure credentials in Langflow components",id:"configure-credentials-in-langflow-components",level:2}];function g(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Langflow integrates with the ",(0,r.jsx)(n.a,{href:"https://console.cloud.google.com/marketplace/product/google/aiplatform.googleapis.com",children:"Google Vertex AI API"})," for authenticating the ",(0,r.jsx)(n.a,{href:"/components-embedding-models#vertexai-embeddings",children:"Vertex AI embeddings model"})," and ",(0,r.jsx)(n.a,{href:"/components-models#vertexai",children:"Vertex AI"})," components."]}),"\n",(0,r.jsx)(n.p,{children:"Learn how to create a service account JSON in Google Cloud to authenticate Langflow\u2019s Vertex AI components."}),"\n",(0,r.jsx)(n.h2,{id:"create-a-service-account-with-vertex-ai-access",children:"Create a service account with Vertex AI access"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Select and enable your Google Cloud project.\nFor more information, see ",(0,r.jsx)(n.a,{href:"https://developers.google.com/workspace/guides/create-project",children:"Create a Google Cloud project"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Create a service account in your Google Cloud project.\nFor more information, see ",(0,r.jsx)(n.a,{href:"https://developers.google.com/workspace/guides/create-credentials#service-account",children:"Create a service account"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Assign the ",(0,r.jsx)(n.strong,{children:"Vertex AI Service Agent"})," role to your new account.\nThis role allows Langflow to access Vertex AI resources.\nFor more information, see ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/docs/general/access-control",children:"Vertex AI access control with IAM"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"To generate a new JSON key for the service account, navigate to your service account."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Add Key"}),", and then click ",(0,r.jsx)(n.strong,{children:"Create new key"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Under ",(0,r.jsx)(n.strong,{children:"Key type"}),", select ",(0,r.jsx)(n.strong,{children:"JSON"}),", and then click ",(0,r.jsx)(n.strong,{children:"Create"}),".\nA JSON private key file is downloaded.\nNow that you have a service account and a JSON private key, you need to configure the credentials in Langflow components."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configure-credentials-in-langflow-components",children:"Configure credentials in Langflow components"}),"\n",(0,r.jsx)(n.p,{children:"With your service account configured and your credentials JSON file created, follow these steps to authenticate the Langflow application."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create a new project in Langflow."}),"\n",(0,r.jsxs)(n.li,{children:["From the components sidebar, drag and drop either the ",(0,r.jsx)(n.strong,{children:"Vertex AI"})," or ",(0,r.jsx)(n.strong,{children:"Vertex AI Embeddings"})," component to your workspace."]}),"\n",(0,r.jsxs)(n.li,{children:["In the Vertex AI component's ",(0,r.jsx)(n.strong,{children:"Credentials"})," field, add the service account JSON file."]}),"\n",(0,r.jsxs)(n.li,{children:["Confirm the component can access the Vertex AI resources.\nConnect a ",(0,r.jsx)(n.strong,{children:"Chat input"})," and ",(0,r.jsx)(n.strong,{children:"Chat output"})," component to the Vertex AI component.\nA successful chat confirms the component has access to the Vertex AI resources."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Configure Vertex AI Credentials in Langflow",src:o(65180).A+"",width:"1913",height:"819"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},65180:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/configure-vertex-ai-credentials-in-langflow-10c417c45f725fee46d4ef5f740316b3.gif"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);