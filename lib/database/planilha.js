const GoogleSpreadsheet = require('google-spreadsheet')
const credencial = require('credencial.json')
const { promisify } = require('util')


const docId = '1o4npQh9jYo4-vlxb9ecpiaSMJUz0-1aulY92f701TdU'

const accessSheet = async() => {
    const doc = new GoogleSpreadsheet(docId)
    await promisify(doc.useServiceAccountAuth)(credencial)
    const info = await promisify(doc.getInfo)()
    console.log(info)
}
accessSheet()