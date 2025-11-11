// Using document.createElement to create and add elements
function addElementWithCreateElement() {
  const container = document.getElementById('container');

  const firstDiv = document.createElement('div');
  firstDiv.className = 'item';
  firstDiv.textContent = 'This is a new item created with createElement.';

  const secondDiv = document.createElement('div');
  secondDiv.className = 'item';
  secondDiv.textContent = 'This is a new item created with createElement.';

  container.appendChild(firstDiv);
  container.appendChild(secondDiv);
}

// Using template strings to create and add elements
function addElementWithTemplateString() {
  const container = document.getElementById('container');

  const newDivHTML = `
        <div class="item">
            This is a new item created with a template string.
        </div>
        <div class="item">
            This is a new item created with a template string.
        </div>
    `;

  container.innerHTML += newDivHTML;
}

// Adding elements using both methods
addElementWithCreateElement();
addElementWithTemplateString();
