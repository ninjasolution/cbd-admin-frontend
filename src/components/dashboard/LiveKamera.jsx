import React, { useEffect, useState } from "react";
import { EmailIcon } from "../../icons";
import img1 from "../../images/live-kamera-1.jpg";
import img2 from "../../images/live-kamera-2.jpg";

function LiveKamera() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    {
      text: "Alpha",
      icon: <EmailIcon width={12} />,
      img: img1,
    },
    {
      text: "Barvo",
      icon: <EmailIcon width={12} />,
      img: img2,
    },
    {
      text: "Charlie",
      icon: <EmailIcon width={12} />,
      img: img1,
    },
    {
      text: "Delta",
      icon: <EmailIcon width={12} />,
      img: img2,
    },
    {
      text: "Echo",
      icon: <EmailIcon width={12} />,
      img: img1,
    },
    {
      text: "Foxtrot",
      icon: <EmailIcon width={12} />,
      img: img2,
    },
  ];

  const [selected, setSelected] = useState("Alpha");
  const [selectedImg, setSelectedImg] = useState(img1);

  const handelClick = (el) => {
    setSelected(el.text);
  };

  useEffect(() => {
    const selectedObj = data.filter((el) => el.text == selected);
    setSelectedImg(selectedObj[0].img);
  }, [selected, data]);

  return (
    <div className="w-full lg:w-5/12 lg:px-4 py-4 lg:py-0">
      <div className="my-border-1 my-shadow-1 border-l-4 p-1">
        <div className="flex py-1.5  px-3 justify-between">
          <h4 className="text-xl">Live-Kamera</h4>
          <EmailIcon width={12} />
        </div>
        <div className="flex">
          <div className="w-3/12 max-h-[300px] overflow-y-scroll">
            {data.map((el) => (
              <div
                onClick={() => handelClick(el)}
                key={el.text}
                className="p-4 flex flex-col items-center  border-zinc-300 space-y-3 cursor-pointer border-b-2"
              >
                <p>{el.text}</p>
                {el.icon}
              </div>
            ))}
          </div>
          <div className="w-9/12">
            <img className="h-full" src={selectedImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveKamera;
