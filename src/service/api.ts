export interface Data {
	messages: {
		role: string;
		content: string;
	}[];
}

export async function query(data:Data) {
	
	try{

		const payload = {...data, model:import.meta.env.VITE_MODEL_API}
		
		const response = await fetch(
			import.meta.env.VITE_URL_API,
			{
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(payload),
			}
		);
		const result = await response.json();
		return result.choices[0].message.content;
	} catch {
		console.log("Erro ao fazer a requisição");
		return null
	}
}