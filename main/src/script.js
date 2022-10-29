//convert vh or vw value to px
const convertVp = (value, vp) => {
  if (vp == "vh") {
    return (value * window.innerHeight) / 100;
  } else if (vp == "vw") {
    return (value * window.innerWidth) / 100;
  } else {
    return console.error("Error with the viewport converter function");
  }
};

//moves relative to pixel values, px of screen scrolling and px value given
const movePx = (item, direction, coefficient) => {
  if (coefficient == 0) {
    console.error(
      `Coefficient is 0, function moveItem has no effect on ${item}`
    );
  } else {
    //determines initial position of element
    const element = document.querySelector(`.${item}`);
    let posTop = getComputedStyle(element).top.split("");
    posTop = Number(posTop.splice(0, posTop.length - 2).join(""));
    let posLeft = getComputedStyle(element).left.split("");
    posLeft = Number(posLeft.splice(0, posLeft.length - 2).join(""));

    //moves the object with scroll event
    window.addEventListener("scroll", () => {
      let secondHalf = window.scrollY * coefficient;
      if (direction == 0) {
        document.getElementById(item).style.top = secondHalf + posTop + "px";
      } else if (direction == 1) {
        document.getElementById(item).style.left = secondHalf + posLeft + "px";
      }
    });
  }
};

//moves items relative to vh and vw value, consistent with all screen sizes, yet splits screen to 100 so a bit more "blocky" as well, moves in slightly bigger chunks
const moveVp = (item, direction, coefficient) => {
  if (coefficient == 0) {
    console.error(
      `Coefficient is 0, function moveItem has no effect on ${item}`
    );
  } else {
    //determines initial position of element

    const element = document.querySelector(`.${item}`);
    let posTop = getComputedStyle(element).top.split("");
    posTop = Number(posTop.splice(0, posTop.length - 2).join(""));
    let posLeft = getComputedStyle(element).left.split("");
    posLeft = Number(posLeft.splice(0, posLeft.length - 2).join(""));

    window.addEventListener("scroll", () => {
      let screenScroll = window.scrollY / window.innerHeight;
      if (direction == 0) {
        //original equation to not get confused in the future
        document.getElementById(item).style.top =
          (screenScroll * coefficient * 100 * window.innerHeight) / 100 +
          posTop +
          "px";
      } else if (direction == 1) {
        //same equation except removed the * 100 and / 100 since its useless
        document.getElementById(item).style.left =
          screenScroll * coefficient * window.innerWidth + posLeft + "px";
      }
    });
  }
};

const init = (item, valueTop, valueLeft) => {
  document.documentElement.style.setProperty(
    `--${item}-top`,
    convertVp(valueTop, "vh") + "px"
  );
  document.documentElement.style.setProperty(
    `--${item}-left`,
    convertVp(valueLeft, "vw") + "px"
  );
};

const onView = (triggerClass, targetClass, animationClass) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target.querySelector(`.${targetClass}`);

      if (entry.isIntersecting) {
        target.classList.add(animationClass);
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      target.classList.remove(animationClass);
    });
  });

  observer.observe(document.querySelector(`.${triggerClass}`));
};
