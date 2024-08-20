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
            contacts: []
        },
        actions: {
            getData: () => {
                fetch("https://playground.4geeks.com/contact/agendas/yonil/contacts")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ contacts: data.contacts || [] });
                    })
                    .catch(error => console.error("Error en fetch de contacts:", error));
            },

            updateContact: (updatedContact) => {
                const store = getStore();

                // Realizar la solicitud PUT al servidor para actualizar el contacto
                fetch(`https://playground.4geeks.com/contact/agendas/yonil/contacts/${updatedContact.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedContact)
                })
                .then(response => response.json())
                .then(data => {
                    // Actualizar el estado local si la actualización fue exitosa
                    const contacts = store.contacts.map(contact =>
                        contact.id === updatedContact.id ? updatedContact : contact
                    );
                    setStore({ contacts });
                })
                .catch(error => console.error("Error al actualizar el contacto:", error));
            },

            addContact: (newContact) => {
                fetch("https://playground.4geeks.com/contact/agendas/yonil/contacts", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newContact)
                })
                .then(response => response.json())
                .then(data => {
                    // Agregar el nuevo contacto al estado local
                    setStore(prevState => ({
                        contacts: [...prevState.contacts, data]
                    }));
                })
                .catch(error => console.error("Error al agregar el contacto:", error));
            },

            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/yonil/contacts/${id}`, {
                    method: 'DELETE'
                })
                .then(() => {
                    // Eliminar el contacto del estado local
                    const store = getStore();
                    const contacts = store.contacts.filter(contact => contact.id !== id);
                    setStore({ contacts });
                })
                .catch(error => console.error("Error al eliminar el contacto:", error));
            },

            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo });
            }
        }
    };
};

export default getState;
