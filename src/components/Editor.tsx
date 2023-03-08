import { Editor as EditorTinymce } from "@tinymce/tinymce-react";
import { useEffect, useState } from "react";

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Editor = ({ value, onChange }: EditorProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleEditorChange = (content: string, editor: any) => {
    onChange(content);
  };

  return (
    <>
      <EditorTinymce
        value={value}
        onEditorChange={handleEditorChange}
        init={{
          language: "pt_BR",
          height: 600,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "print",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "paste",
            "code",
            "help",
            "wordcount",
            "table",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | table | bullist numlist outdent indent | removeformat | help",
          table_resizing: true,
          table_appearance_options: true,
          menu: {
            file: { title: "File", items: "print" },
            edit: {
              title: "Edit",
              items: "undo redo | cut copy paste pastetext | selectall",
            },
            insert: {
              title: "Insert",
              items:
                "link image media | inserttable  | charmap emoticons hr | insertdatetime",
            },
            view: {
              title: "View",
              items: "preview fullscreen | visualaid visualblocks",
            },
            format: {
              title: "Format",
              items:
                "bold italic underline strikethrough superscript subscript | \
                    formats | removeformat",
            },
            table: {
              title: "Table",
              items: "inserttable | cell row column | tableprops deletetable",
            },
            tools: { title: "Tools", items: "spellchecker code" },
          },
        }}
      />
    </>
  );
};
