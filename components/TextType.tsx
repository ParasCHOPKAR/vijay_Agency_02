"use client";

import { useState, useEffect } from "react";

interface TextTypeProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  variableSpeedEnabled?: boolean;
}

export default function TextType({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = "|",
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      // Find out which string we are currently typing
      const i = loopNum % texts.length;
      const fullText = texts[i];

      // Update the display text based on whether we are typing or deleting
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      // Determine the speed of the next keystroke
      let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

      // If word is fully typed, pause before deleting
      if (!isDeleting && displayText === fullText) {
        currentSpeed = pauseDuration;
        setIsDeleting(true);
      } 
      // If word is fully deleted, move to the next word
      else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        currentSpeed = 500; // Small pause before starting the next string
      }

      timer = setTimeout(handleType, currentSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="text-type">
      {displayText}
      {showCursor && (
        <span className="text-type__cursor" style={{ animation: "blink 1s step-end infinite" }}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}