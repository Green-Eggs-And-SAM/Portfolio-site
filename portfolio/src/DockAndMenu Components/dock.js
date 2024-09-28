import "./dock.scss";
import { useEffect } from "react";
import Icon from "./icon";

function Dock() {
    // let length = icons.length;
    let icons;
    useEffect(() => {
        icons = document.querySelectorAll(".ico");
        console.log(icons);
        icons.forEach((item, index) => {
            item.addEventListener("mouseover", (e) => {
                focus(e.target, index);
            });
            item.addEventListener("mouseleave", (e) => {
                icons.forEach((item) => {
                    item.style.transform = "scale(1)  translateY(0px)";
                });
            });
        });
    }, []);

    const focus = (elem, index) => {
        console.log("focus");
        let previous = index - 1;
        let previous1 = index - 2;
        let next = index + 1;
        let next2 = index + 2;

        elem.style.transform = "scale(1.5)  translateY(-6px)";
        if (icons[previous] !== undefined)
            icons[previous].style.transform = "scale(1.2) translateY(-3px)";
        if (icons[previous1] !== undefined)
            icons[previous1].style.transform = "scale(1.1)";
        if (icons[next] !== undefined)
            icons[next].style.transform = "scale(1.2) translateY(-3px)";
        if (icons[next2] !== undefined)
            icons[next2].style.transform = "scale(1.1)";
    };

    return (
        <>
            <div className="dock">
                <div className="dock-container">
                    {/* <li className="li-1">
                        <div className="name">Finder</div>
                        <img
                            className="ico"
                            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
                            alt=""
                        />
                    </li>
*/}

                    <Icon
                        name={"Finder"}
                        source={
                            "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
                        }
                    />
                    <Icon
                        name={"Siri"}
                        source={
                            "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png"
                        }
                    />
                    <Icon
                        name={"LaunchPad"}
                        source={
                            "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png"
                        }
                    />
                    <Icon
                        name={"Contacts"}
                        source={
                            "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png"
                        }
                    />
                </div>
            </div>
        </>
    );
}

export default Dock;
