test('Devo conhecer as principais assertivas de Jest', () => {
	let number = null;
	expect(number).toBeNull();
	number = 10;
	expect(number).not.toBeNull();
	expect(number).toBe(10);
	expect(number).toEqual(10);
	expect(number).toBeGreaterThan(9);
	expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
	const obj = { name: 'Jeferson', mail: 'jeferson@mail.com' };
	expect(obj).toHaveProperty('name', 'Jeferson');
	expect(obj.name).toBe('Jeferson');

	const obj2 = { name: 'Jeferson', mail: 'jeferson@mail.com' };
	expect(obj).toEqual(obj2);
	expect(obj).toBe(obj);
});
