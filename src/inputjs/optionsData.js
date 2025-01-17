let elemProps = ["id", "className", "type", "src", "value", "checked", "innerText", "innerHTML", "style", "title", "alt", "for", "placeholder"];

export default {

  // default watch functions
  watchFunctions: {
    "*": function ({watchElem, watchAttrName, camelCaseKeyName, value, dataSourceElem, watchFuncName, watchFuncArgs, dataTargetElem}) {
      
      // if func is a valid elem property, set that prop to the new value (allow nested props)
      let listOfProps = watchFuncName.split(".");
      let currentObj = watchElem;
      listOfProps.forEach((propName, index) => {
        if (index + 1 < listOfProps.length) {
          currentObj = currentObj[propName];
        } else {
          currentObj[propName] = value;
        }
      });

      // if (elemProps.includes(watchFuncName)) {
      //   watchElem[watchFuncName] = value;
      // }

      // if func is a data attribute, set the first arg as its value
      if (watchFuncName.startsWith("data-")) {
        watchElem.setAttribute(watchFuncName, value);
      }

    }
  }
};



