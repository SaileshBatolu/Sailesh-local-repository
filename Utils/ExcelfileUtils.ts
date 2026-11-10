import { error } from 'console'
import xlsx from 'xlsx'
export class ExcelfileUtils{

    static getexceledata(filepath:string, sheetname:string){
        try{
            const workbook = xlsx.readFile(filepath)
            const sheet = workbook.Sheets[sheetname]
            const jsondata = xlsx.utils.sheet_to_json(sheet)
            return jsondata
        }
        catch{
            console.log(error)
        }
    }

}