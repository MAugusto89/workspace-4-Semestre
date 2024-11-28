const express = require('express');
const sequelize = require('./config/database');
const Tutorial = require('./models/Tutorial');

const app = express();
const port = 3000;

app.use(express.json());
//Sincronizar o modelo com o banco de dados
sequelize.sync().then(() =>{
    console.log('Banco de dados sincronizado com sucesso!');
}); //rota de teste
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Rota para criação de um novo tutorial
app.post('/tutorials', async (req, res) => {
    try {
        const tutorial = await Tutorial.create(req.body);
        res.status(201).json(tutorial);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

//Rota para ler todos os tutoriais
app.get('/tutorials', async (req, res) => {
    try {
        const tutorials = await Tutorial.findAll();
        res.status(200).json(tutorials);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

//Rota para ler um tutorial específico
app.get('/tutorials/:id', async (req, res) => {
    try {
        const tutorial = await Tutorial.findByPk(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        res.status(200).json(tutorial);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

//Rota para atualizar um tutorial específico
app.put('/tutorials/:id', async (req, res) => {
    try {
        const tutorial = await Tutorial.findByPk(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        await tutorial.update(req.body);
        res.status(200).json(tutorial);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    } 
});

//Rota para deletar um tutorial específico
app.delete('/tutorials/:id', async (req, res) => {
    try {
        const tutorial = await Tutorial.findByPk(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        await tutorial.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});