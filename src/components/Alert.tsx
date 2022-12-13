import { useContext } from 'react'
import { MdOutlineError } from 'react-icons/md'
import { AlertContext } from '../context/AlertContext'
import { AlertState } from '../interfaces/IAlertReducer'

function Alert() {
    const { alert } = useContext<AlertState>(AlertContext)

    return (
        <div className="">
            <p className="flex items-start mb-2 space-x-2 font-semibold">
                {alert.type === 'error' ? 
                    <><MdOutlineError className='fill-red-300 mr-4' size={20} /> {alert.message}</> 
                    : ''
                }
            </p>
        </div>
    )
}

export default Alert
