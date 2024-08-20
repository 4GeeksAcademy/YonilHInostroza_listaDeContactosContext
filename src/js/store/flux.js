const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getData: () => {
				// Fetch contacts from API
				fetch("https://playground.4geeks.com/contact/agendas/yonil/contacts")
					.then(response => response.json())
					.then(data => {
						// Accede a la propiedad 'contacts' en el objeto 'data'
						setStore({contacts:data.contacts || []});
					})
					.catch(error => console.error("Error en fetch de contacts:", error));
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
