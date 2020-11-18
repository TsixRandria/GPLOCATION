import React, { Component } from 'react'

class TrifDeBase extends Component {
    render() {
        return (
            <div>
                <center><h1>Gestion des tarifs de base</h1></center>
                <br/>
                <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <h2>basse saison</h2>
                    <div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
                        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number"/>
                        </div>
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                         py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number"/>
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" />
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <h2>Moyenne saison</h2>
                    <div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" />
                        </div>
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" />
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" />
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" />
                    </div>
                </div>

                <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0 col-md-6">
                    <h2>Haute saison</h2>
                    <div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" />
                        </div>
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number"/>
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number"/>
                    </div>
                    <div >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 
                        px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrifDeBase;
