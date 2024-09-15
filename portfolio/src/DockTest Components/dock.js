import "./dock.scss";

function Dock() {
    let icons = document.querySelectorAll(".ico");
    let length = icons.length;

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

    const focus = (elem, index) => {
        console.log("focus");
        let previous = index - 1;
        let previous1 = index - 2;
        let next = index + 1;
        let next2 = index + 2;

        if (previous == -1) {
            console.log("first element");
            elem.style.transform = "scale(1.5)  translateY(-10px)";
        } else if (next == icons.length) {
            elem.style.transform = "scale(1.5)  translateY(-10px)";
            console.log("last element");
        } else {
            elem.style.transform = "scale(1.5)  translateY(-10px)";
            if (icons[previous] !== undefined)
                icons[previous].style.transform = "scale(1.2) translateY(-6px)";
            if (icons[previous1] !== undefined)
                icons[previous1].style.transform = "scale(1.1)";
            if (icons[next] !== undefined)
                icons[next].style.transform = "scale(1.2) translateY(-6px)";
            if (icons[next2] !== undefined)
                icons[next2].style.transform = "scale(1.1)";
        }
    };

    return (
        <>
            <div className="dock">
                <div className="dock-container">
                    <li className="li-1">
                        <div className="name">Finder</div>
                        <img
                            className="ico"
                            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png"
                            alt=""
                        />
                    </li>
                    <li className="li-2">
                        <div className="name">Siri</div>
                        <img
                            className="ico"
                            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png"
                            alt=""
                        />
                    </li>
                    <li className="li-3">
                        <div className="name">LaunchPad</div>
                        <img
                            className="ico"
                            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png"
                            alt=""
                        />
                    </li>
                    <li className="li-4">
                        <div className="name">Contacts</div>
                        <img
                            className="ico"
                            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png"
                            alt=""
                        />
                    </li>
                    <li className="li-5">
                        <div className="name">Notes</div>
                        <img
                            className="ico"
                            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png"
                            alt=""
                        />
                    </li>
                    <li className="li-6">
                        <div className="name">Reminders</div>
                        <img
                            className="ico"
                            src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png"
                            alt=""
                        />
                    </li>
                </div>
            </div>
        </>
    );
}

export default Dock;
