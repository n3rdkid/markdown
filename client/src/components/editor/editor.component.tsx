import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "../../../node_modules/codemirror/lib/codemirror.css";
import "../../../node_modules/codemirror/theme/eclipse.css";
import "../../../node_modules/codemirror/mode/javascript/javascript";
const Editor = (props: any) => {
  const [value, setValue] = useState("");
  return (
    <div style={{width:"300px"}}>
      <CodeMirror
        // autoFocus={true}
        // autoRefresh={true}
        value={value}
        options={{
          theme: "eclipse",
          lineNumbers: true,
          mode: "javascript",
          tabSize: 2,
          autofocus: true,
          foldGutter: false,
          gutters: [],
          styleSelectedText: true,
        }}
        onChange={(editor, data, value) => {
          setValue(value);
        }}
      />
    </div>
  );
};

export default Editor;
