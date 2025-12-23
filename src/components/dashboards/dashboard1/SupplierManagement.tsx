import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface Supplier {
    id: number;
    name: string;
    account: string;
    daily: string;
    schedules?: string[];
}


const suppliers: Supplier[] = [
    { 
        id: 1, 
        name: "AAH", 
        account: "706S11014289U", 
        daily: "Daily Spend Amount", 
        schedules: ["Create Schedule"] 
    },
    { 
        id: 2, 
        name: "ALLIANCE", 
        account: "999R00072059P", 
        daily: "Daily Spend Amount", 
        schedules: ["Create Schedule"]  
    },
    { 
        id: 3, 
        name: "BESTWAY", 
        account: "LEI011T###9A3B7AEFEB...", 
        daily: "Daily Spend Amount", 
        schedules: ["Create Schedule"] 
    },
    { 
        id: 4, 
        name: "BNS", 
        account: "B7362", 
        daily: "200.00", 
        schedules: ["Create Schedule","Log"] 
    },
    { 
        id: 5, 
        name: "CLARITY", 
        account: "Y17861", 
        daily: "Daily Spend Amount", 
        schedules: ["Create Schedule","Log"] 
    },
    { 
        id: 6, 
        name: "OTC", 
        account: "OTC0000805028", 
        daily: "Daily Spend Amount", 
        schedules: ["Create Schedule"] 
    },
    { 
        id: 7, 
        name: "PHOENIX", 
        account: "8766", 
        daily: "Daily Spend Amount", 
        schedules: ["Create Schedule"] 
    },
    { 
        id: 8, 
        name: "SIGMA", 
        account: "DCD2473087LEI", 
        daily: "Daily Spend Amount", 
        schedules: ["Create Schedule"] 
    },
    { 
        id: 9, 
        name: "TRIDENT", 
        account: "606R00146655Q", 
        daily: "Daily Spend Amount", 
        schedules: ["Create Schedule"] 
    }
];


type ToggleState = Record<number, boolean>;

const SupplierManagement = () => {
    const [enabledRows, setEnabledRows] = useState<ToggleState>({});
    const [showPopup, setShowPopup] = useState(false);
    const [popupRow, setPopupRow] = useState<number | null>(null);
    const [step, setStep] = useState(1);

    useEffect(() => {
        const saved = localStorage.getItem("supplier_toggles");
        if (saved) setEnabledRows(JSON.parse(saved));
    }, []);

    const saveState = (state: ToggleState) => {
        localStorage.setItem("supplier_toggles", JSON.stringify(state));
    };

    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const checked = e.target.checked;

        if (checked) {
            e.preventDefault();
            setPopupRow(id);
            setShowPopup(true);
            setStep(1);
            return;
        }

        const updated = { ...enabledRows, [id]: false };
        setEnabledRows(updated);
        saveState(updated);
    };

    const finishSteps = () => {
        if (popupRow === null) return;

        const updated = { ...enabledRows, [popupRow]: true };
        setEnabledRows(updated);
        saveState(updated);

        setShowPopup(false);
        setPopupRow(null);
        setStep(1);
    };

    // Log Popup

    const [showLogPopup, setShowLogPopup] = useState(false);
    const [logData, setLogData] = useState<any[]>([]);

    const supplierLogs: Record<number, any[]> = {
        4: [
            { id: 1, status: "OFF", updatedBy: "LEIGH ROAD PHARMACY", date: "07-02-2025 11:10" },
            { id: 2, status: "ON", updatedBy: "LEIGH ROAD PHARMACY", date: "07-02-2025 10:48" },
            { id: 3, status: "OFF", updatedBy: "LEIGH ROAD PHARMACY", date: "31-01-2025 16:35" },
        ],
        5: [
            { id: 1, status: "ON", updatedBy: "CLARITY PHARMACY", date: "05-02-2025 09:20" },
        ]
    };


    return (
        <div className="bg-white border-gray-200 shadow-md p-6 rounded-[16px]">

            {/* Top Info Box */}
            <div className="flex items-start justify-between bg-[#fff8e5] border border-[#f1d097] text-[#4a4a4a] text-sm p-3 rounded-md shadow-sm mb-5">
                <p className="leading-snug pr-3">The Supplier Management page allows you to turn suppliers ON/OFF instantly. (Read More..)</p>
                <button className="text-[#777] hover:text-[#000] transition-colors">
                    <X size={16} />
                </button>
            </div>

            <table className="min-w-[1000px] w-full table-auto border-collapse text-sm">
                <thead>
                    <tr className="bg-sky-600 text-white text-[14px]">
                        <th className="p-2 border-r">S.No.</th>
                        <th className="p-2 border-r">Supplier Name</th>
                        <th className="p-2 border-r">Supplier A/C.</th>
                        <th className="p-2 border-r">Minimum Daily Spend($)</th>
                        <th className="p-2 border-r">Power Status</th>
                        <th className="p-2 border-r">Next Schedule</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>

                <tbody className="text-[12px]">

                    {suppliers.map((item) => (
                        <tr key={item.id} className="bg-white even:bg-sky-50">

                            <td className="p-2 text-center border-r font-medium">{item.id}</td>
                            <td className="p-2 text-center border-r font-medium uppercase">{item.name}</td>
                            <td className="p-2 text-center border-r uppercase">{item.account}</td>

                            <td className="p-2 text-center border-r">
                                <span className="p-[5px_10px] border border-gray-300 rounded-md">
                                    {item.daily}
                                </span>
                            </td>

                            {/* Toggle Switch */}
                            <td className="p-2 text-center border-r relative">
                                <label className="relative inline-flex items-center cursor-pointer">

                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={enabledRows[item.id] || false}
                                        onChange={(e) => handleToggleChange(e, item.id)}
                                    />

                                    <div className="w-16 h-[24px] bg-gray-300 rounded-full peer-checked:bg-green-500 transition"></div>

                                    <div className="absolute left-1 top-1 w-[16px] h-[16px] bg-white rounded-full transition-all peer-checked:translate-x-10"></div>

                                    <span className="absolute left-4 text-xs text-white font-semibold opacity-0 peer-checked:opacity-100">ON</span>
                                    <span className="absolute right-4 text-xs text-gray-600 font-semibold peer-checked:opacity-0 opacity-100">OFF</span>
                                </label>

                                {/* Popup */}
                                {showPopup && popupRow === item.id && (
                                    <>
                                        <div className="fixed inset-0 bg-black/30 z-40" onClick={finishSteps}></div>

                                        <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[340px] bg-white shadow-xl rounded-lg border p-5 z-50">
                                            <h2 className="text-center font-bold text-lg mb-2">SUPPLIER MANAGEMENT</h2>

                                            {step === 1 && <p className="text-center text-gray-700">Step 1: This toggle helps you enable or disable suppliers instantly.</p>}
                                            {step === 2 && <p className="text-center text-gray-700">Step 2: Turn ON suppliers you want active.</p>}
                                            {step === 3 && <p className="text-center text-gray-700">Step 3: Setup complete. Click Finish.</p>}

                                            <div className="flex justify-between mt-4">
                                                {step > 1 ? (
                                                    <button className="px-5 py-1 border border-red-500 text-red-700 rounded-lg" onClick={() => setStep(step - 1)}>
                                                        Back
                                                    </button>
                                                ) : (
                                                    <button className="px-5 py-1 border border-gray-400 text-gray-600 rounded-lg opacity-50 cursor-not-allowed">
                                                        Back
                                                    </button>
                                                )}

                                                {step < 3 ? (
                                                    <button className="px-5 py-1 border border-green-600 text-green-700 rounded-lg" onClick={() => setStep(step + 1)}>
                                                        Next
                                                    </button>
                                                ) : (
                                                    <button className="px-5 py-1 border border-green-600 text-green-700 rounded-lg" onClick={finishSteps}>
                                                        Finish
                                                    </button>
                                                )}
                                            </div>

                                            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                                        </div>
                                    </>
                                )}

                            </td>

                            <td className="p-2 text-center border-r">-</td>
                            <td className="p-2 text-center font-semibold">
                                {item.schedules && item.schedules.length > 0 && (
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {item.schedules.map((schedule, index) => (
                                        <span
                                            key={index}
                                            className={`px-2 py-[3px] border rounded-md text-xs uppercase whitespace-nowrap cursor-pointer
                                                ${schedule === "Log" 
                                                    ? "border-blue-600 text-blue-600 font-semibold"   // LOG badge style
                                                    : "border-green-600 text-green-600"
                                                }
                                            `}
                                            onClick={() => {
                                                if (schedule === "Log") {
                                                    setLogData(supplierLogs[item.id] || []);
                                                    setShowLogPopup(true);
                                                }
                                            }}
                                        >
                                            {schedule}
                                        </span>
                                        ))}
                                    </div>
                                )}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            {showLogPopup && (
                <>
                    <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setShowLogPopup(false)}></div>

                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[600px] rounded-md shadow-xl z-50 p-5 transition-all duration-300 ease-in-out">

                        <div className="flex justify-center items-center mb-3">
                            <h2 className="text-lg font-bold text-center">BNS - SUPPLIER MANAGEMENT LOG</h2>
                            <button onClick={() => setShowLogPopup(false)}>
                                <X size={20} className="absolute top-[10px] right-[10px]" />
                            </button>
                        </div>

                        <div className="border rounded-md border-ld overflow-hidden">
                            <table className="w-full table-auto border-collapse text-sm">
                                <thead className="bg-sky-600 text-white text-center">
                                    <tr>
                                        <th className="p-2 border-r">S.No.</th>
                                        <th className="p-2 border-r">Status</th>
                                        <th className="p-2 border-r">Updated By</th>
                                        <th className="p-2">Updated On</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {logData.map((log) => (
                                        <tr key={log.id} className="bg-white even:bg-sky-50 text-center">
                                            <td className="p-2 border-r">{log.id}</td>
                                            <td className="p-2 border-r font-semibold">{log.status}</td>
                                            <td className="p-2 border-r">{log.updatedBy}</td>
                                            <td className="p-2">{log.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </>
            )}


        </div>
    );
};

export default SupplierManagement;
