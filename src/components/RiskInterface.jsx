import { Switch, FormGroup, FormControlLabel} from "@mui/material"
import { useEffect, useState, useRef } from "react"
import riskList from "@/api/riskList"
import RiskTable from "./RiskTable";

export default function RiskInterface({ onClose, entityName}) {
    const [Offshore, setOffshore] = useState([]);
    const [showOffshore, setShowOffshore] = useState(true);
    const [worldBank, setWorldBank] = useState([]);
    const [showWorldBank, setShowWorldBank] = useState(false);
    const [OFAC, setOFAC] = useState([]);
    const [showOFAC, setShowOFAC] = useState(false);


    const fetchData = async () => {
        try {
          const resp = await riskList.get(`${entityName.trim().toLowerCase().replace(/ /g, '+')}`);
          console.log(resp);
          if(resp?.data?.status_code == 202){
            alert("Límite de peticiones a OffshoreLeaks alcanzado")
          }else if(resp?.data?.best_match){
            setOffshore(resp.data?.results);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect(() => {
      if (Offshore.length == 0) {
        fetchData();
      }
    }, [entityName]);

    const handleOffshore = async() => {
        if(Offshore.length == 0){ //no tiene data
            fetchData()
        }
        setShowOffshore(!showOffshore)
    }

    const handleWorldBank = async() => {
        if(worldBank.length == 0){ //no tiene data
            setWorldBank(Offshore)
        }
        setShowWorldBank(!showWorldBank)
    }

    const handleOFAC = async() => {
        if(OFAC.length == 0){ //no tiene data
            setOFAC(Offshore)
        }
        setShowOFAC(!showOFAC)
    }
  
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 overflow-hidden">
            <div className="bg-white py-12 px-6 rounded-md shadow-lg max-h-full overflow-y-auto min-w-[50%]">
                <div className="justify-between flex gap-8 mb-4 pb-4 border-b border-gray-200">
                    <p className="text-2xl font-bold">Cruce con Listas de Riesgo</p>
                    <button className="bg-red-600 hover:bg-red-700 py-1 px-2 rounded-lg text-lg text-white" onClick={onClose}>Cerrar</button>
                </div>
                <FormGroup>
                    <FormControlLabel className="pt-5" control={<Switch defaultChecked onChange={handleOffshore} />} label="Offshore Leaks" />
                    {showOffshore && (Offshore.length != 0 ? <RiskTable rows={Offshore} /> :
                        <div className="text-xl italic"> No se encontraron resultados...</div>)}
                    <FormControlLabel className="pt-5" control={<Switch onChange={handleWorldBank} />} label="The World Bank" />
                    {showWorldBank && (worldBank.length != 0 ? <RiskTable rows={worldBank} /> :
                        <div className="text-xl italic"> No se encontraron resultados...</div>)}
                    <FormControlLabel className="pt-5" control={<Switch onChange={handleOFAC} />} label="OFAC" />
                    {showOFAC && (OFAC.length != 0 ? <RiskTable rows={OFAC} /> :
                        <div className="text-xl italic"> No se encontraron resultados...</div>)}
                </FormGroup>
            </div>
        </div>
    )    
}