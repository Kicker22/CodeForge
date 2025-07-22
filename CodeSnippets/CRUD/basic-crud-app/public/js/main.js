document.addEventListener("DOMContentLoaded", function() {
    const itemsTableBody = document.getElementById("items-table-body");

    // Fetch items and populate the table
    fetch('/api/items')
        .then(response => response.json())
        .then(items => {
            items.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.diceRoll}</td>
                    <td>${item.description}</td>
                    <td>
                        <a href="edit.html?id=${item.id}">Edit</a> |
                        <a href="delete.html?id=${item.id}">Delete</a>
                    </td>
                `;
                itemsTableBody.appendChild(row);
            });
        });

    // Handle create item form submission
    const createItemForm = document.getElementById("create-item-form");
    if (createItemForm) {
        createItemForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(createItemForm);
            const data = Object.fromEntries(formData.entries());

            fetch('/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(item => {
                window.location.href = 'index.html';
            });
        });
    }

    // Handle edit item form submission
    const editItemForm = document.getElementById("edit-item-form");
    if (editItemForm) {
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');

        fetch(`/api/items/${itemId}`)
            .then(response => response.json())
            .then(item => {
                document.getElementById("item-id").value = item.id;
                document.getElementById("name").value = item.name;
                document.getElementById("description").value = item.description;
            });

        editItemForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(editItemForm);
            const data = Object.fromEntries(formData.entries());

            fetch(`/api/items/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(item => {
                window.location.href = 'index.html';
            });
        });
    }

    // Handle delete item form submission
    const deleteItemForm = document.getElementById("delete-item-form");
    const itemToDelete = document.getElementById("item-to-delete");
    if (deleteItemForm) {
        if (itemToDelete) {
            const urlParams = new URLSearchParams(window.location.search);
            const itemId = urlParams.get('id');

            fetch(`/api/items/${itemId}`)
                .then(response => response.json())
                .then(item => {
                    itemToDelete.textContent = item.name;
                })
                .catch(error => console.error('Error:', error));
        }
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');

        deleteItemForm.addEventListener("submit", function(event) {
            event.preventDefault();

            fetch(`/api/items/${itemId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = 'index.html';
                } else {
                    console.error('Failed to delete item');
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }
});