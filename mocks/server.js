import { setupServer } from 'msw/node'
import { handlers } from './handlers/sample/listPokemon'

// Once APIs are established, set up their handlers with mock data in a flat array
export const server = setupServer(...handlers)
