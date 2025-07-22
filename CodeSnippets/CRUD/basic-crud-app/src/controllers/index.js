class CrudController {
    constructor() {
        this.items = [];
        this.currentId = 1;
    }

    createItem(req, res) {
        const newItem = { id: this.currentId++, ...req.body };
        this.items.push(newItem);
        res.status(201).json(newItem);
    }

    readItems(req, res) {
        res.json(this.items);
    }

    readItem(req, res) {
        const item = this.items.find(i => i.id === parseInt(req.params.id));
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    }

    updateItem(req, res) {
        const item = this.items.find(i => i.id === parseInt(req.params.id));
        if (!item) return res.status(404).send('Item not found');

        Object.assign(item, req.body);
        res.json(item);
    }

    deleteItem(req, res) {
        const index = this.items.findIndex(i => i.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).send('Item not found');

        this.items.splice(index, 1);
        res.status(204).send();
    }
}

module.exports = CrudController;