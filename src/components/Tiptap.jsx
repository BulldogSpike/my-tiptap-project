import Document from '@tiptap/extension-document'
import FontFamily from '@tiptap/extension-font-family'
import { Color } from '@tiptap/extension-color'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import "react-color-palette/lib/css/styles.css";
import React from 'react'
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
  FaFont,
} from "react-icons/fa";
import {FaX} from "react-icons/fa6";


const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menuBar">
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is_active" : ""}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is_active" : ""}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is_active" : ""}
        >
          <FaUnderline />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is_active" : ""}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is_active" : ""
          }
        >
          <FaHeading />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is_active" : ""
          }
        >
          <FaHeading className="heading3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is_active" : ""}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is_active" : ""}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is_active" : ""}
        >
          <FaQuoteLeft />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is_active" : ""}>
          <FaFont />
        </button>
        <input
          type="color"
          onInput={event => editor.chain().focus().setColor(event.target.value).run()}
          value={editor.getAttributes('textStyle').color}
        />
        <button onClick={() => editor.chain().focus().unsetColor().run()}>
          <FaX />
        </button>
        <button onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo />
        </button>
        <button
          onClick={() => editor.chain().focus().setFontFamily('Rubik').run()}
          className={
          editor.isActive('textStyle', { fontFamily: 'Rubik' }) ? 'is-active' : ''}>
          Rubik
        </button>
        <button
          onClick={() => editor.chain().focus().setFontFamily('Open Sans').run()}
          className={
          editor.isActive('textStyle', { fontFamily: 'Open Sans' }) ? 'is-active' : ''}>
          Open Sans
        </button>
        <button
          onClick={() => editor.chain().focus().setFontFamily('Noto Sans').run()}
          className={
          editor.isActive('textStyle', { fontFamily: 'Noto Sans' }) ? 'is-active' : ''}>
          Noto Sans
        </button>
        <button
          onClick={() => editor.chain().focus().setFontFamily('Noto Serif').run()}
          className={
          editor.isActive('textStyle', { fontFamily: 'Noto Serif' }) ? 'is-active' : ''}>
          Noto Serif
        </button>
        <button
          onClick={() => editor.chain().focus().setFontFamily('Roboto Mono').run()}
          className={
          editor.isActive('textStyle', { fontFamily: 'Roboto Mono' }) ? 'is-active' : ''}>
          Roboto Mono
        </button>
        <button onClick={() => editor.chain().focus().unsetFontFamily().run()}>
          RemoveFont
        </button>        
      </div>
    </div>

  );
};

export const Tiptap = ({ setDescription }) => {
  const editor = useEditor({
    extensions: [StarterKit, Document, Underline, Paragraph, Text, TextStyle, Color, FontFamily],
    content: ``,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  return (
    <div className="textEditor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};