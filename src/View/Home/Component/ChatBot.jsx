import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatBot = ({ setIsChatVisible }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [options, setOptions] = useState([
    "Tell me what products are in the catalogue.",
    "How do I order the product?",
    "How do I find seller information?",
  ]);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setMessages([
      {
        text: "Hello! I'm here to assist you with your questions. How can I help you today?",
        sender: "bot",
      },
    ]);
  }, []);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      if (selectedOption !== null) {
        setMessages([
          ...messages,
          {
            text: `Here's some information about "${options[selectedOption]}":`,
            sender: "bot",
          },
        ]);

        switch (selectedOption) {
          case 0:
            setMessages([
              ...messages,
              {
                text: "All types of products are available in the catalog section on the website page.",
              },
            ]);
            break;
          case 1:
            setMessages([
              ...messages,
              {
                text: "To order, you can contact the seller. Seller information is available on the website page",
              },
            ]);
            break;
          case 2:
            setMessages([
              ...messages,
              {
                text: "On the website page, a contact menu is available to find seller information.",
              },
            ]);
            break;
          default:
            setMessages([
              ...messages,
              {
                text: "I'm sorry, I'm just a demo bot and can't provide specific information. You can choose from the following options:",
                sender: "bot",
              },
            ]);
        }
        setSelectedOption(null);
        setOptions([
          "Tell me what products are in the catalogue.",
          "How do I order the product?",
          "How do I find seller information?",
        ]);
      } else {
        setMessages([
          ...messages,
          {
            text: "I'm sorry, I'm just a demo bot and can't provide specific information. You can choose from the following options:",
            sender: "bot",
          },
        ]);
      }
    }
  };
  const formatTimestamp = (timestamp) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(timestamp);
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setInputMessage(options[index]);
  };

  return (
    <div className="fixed bottom-16 right-8 bg-white w-80 p-4 rounded-lg shadow-md drop-shadow-2xl">
      <h2 className="text-xl font-bold mb-4">F&Q</h2>
      <div className="flex justify-end mb-2">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={() => setIsChatVisible(false)}
        >
          <FontAwesomeIcon icon={faTimes} className="text-lg" />
        </button>
      </div>
      <div className="border border-gray-300 p-2 h-48 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div className="flex justify-between">
              <p
                className={`mt-5 rounded-lg p-2 inline-block ${
                  message.sender === "user"
                    ? "bg-blue-200 text-gray-700"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {message.text}
                {message.sender === "bot" && (
                  <span className="text-xs text-gray-400 ml-2 ">
                    {formatTimestamp(message.timestamp)}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-l-md p-2"
          placeholder="Ask your question"
          value={inputMessage}
          readOnly={true}
        />
        <button
          className="bg-gray-800 text-white rounded-r-md px-4 py-2 hover:bg-gray-600"
          onClick={handleSendMessage}
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
        </button>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Choose a question:</p>
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer text-blue-500 hover:underline"
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatBot;
