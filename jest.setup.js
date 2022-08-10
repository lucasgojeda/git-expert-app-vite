
import 'isomorphic-fetch'
import { getEnvironmets } from './src/helpers/getEnvironmets'

require('dotenv').config({
    path: '.env.test'
})

jest.mock('./src/helpers/getEnvironmets', () => ({
    getEnvironmets: () => ({ ...process.env })
}))

