function includeCommonHTML() {
  fetch("header.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (commonHTML) {
      var commonContainer = document.createElement("div");
      commonContainer.innerHTML = commonHTML;
      document.body.insertBefore(commonContainer, document.body.firstChild);
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

// Call the function to include the common HTML code
includeCommonHTML();
