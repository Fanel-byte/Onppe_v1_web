import "../../App.css";
import React from 'react';
import Signal from "../../components/Signalement";

export function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="grid grid-cols-12 grid-rows-12">

                <div className="col-span-10">

                    {/*le code de la partie signalement ici */}
                    <Signal/>
                </div>

            </div>

        </div>

    );
}
export default Dashboard;
