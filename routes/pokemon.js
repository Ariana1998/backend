const {Router} = require('express');
const router = Router();
const {getPokemones, createPokemon, getPokemon, getPokemonesByUser, updatePokemon, deletePokemon} = require('../controllers/pokemon.controller');
/**
 * @swagger
 * tags:
 *   name: Pokemon
 *   description: El gestor de los pokemones
 * /api/pokemones:
 *   post:
 *     summary: Crea un nuevo pokemon
 *     tags: [Pokemon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pokemon'
 *     responses:
 *       200:
 *         description: Se crea correctamente el pokemon.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Pokemon Saved'}
 *       500:
 *         description: Some server error
 * /api/pokemones/user/{id}:
 *   get:
 *     summary: Devuelve una lista de todos los pokemones del Usuario
 *     tags: [Pokemon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del Usuario
 *     responses:
 *       200:
 *         description: Devuelve una lista de todos los pokemones del Usuario en formato json
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pokemon'
 * 
 * /api/pokemones/{id}:
 *   get:
 *     summary: Obtener pokemon por id
 *     tags: [Pokemon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del pokemon
 *     responses:
 *       200:
 *         description: Devuelve el pokemon correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       404:
 *         description: Pokemon was not found
 *   put:
 *    summary: Modificar los datos del pokemon
 *    tags: [Pokemon]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del pokemon
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Pokemon'
 *    responses:
 *      200:
 *        description: Devuelve un mensaje si el pokemon fue modificado correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Pokemon Updated'}
 *      404:
 *        description: Pokemon was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar Pokemon
 *     tags: [Pokemon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del pokemon
 *
 *     responses:
 *       200:
 *         description: Devuelve un mensaje si el pokemon pudo ser eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Pokemon Deleted'}
 *       404:
 *         description: Pokemon was not found
 */
// Esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       required:
 *         - name
 *         - types
 *         - id
 *       properties:
 *         name:
 *           type: String
 *           description: El nombre del pokemon
 *         types:
 *           type: String
 *           description: Los tipos del pokemon
 *         id:
 *           type: String
 *           description: El usuario al que pertenece el pokemon
 *       example:
 *         id: 0197
 *         name: Umbreon 
 *         types: Dark
 *         idUsuario: 6524d14e82ea98549a4e27ad
 */
router.route('/user/:id')
    .get(getPokemonesByUser)
router.route('/')
    .get(getPokemones)
    .post(createPokemon)
router.route('/:id')
    .get(getPokemon)
    .put(updatePokemon)
    .delete(deletePokemon)

module.exports = router;