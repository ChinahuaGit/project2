
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dept').del()
    .then(() => Promise.all([
      knex('dept').insert({ name: 'Lumber', dept_id: '21' }),
      knex('dept').insert({ name: 'Building Material', dept_id: '22' }),
      knex('dept').insert({ name: 'Flooring', dept_id: '23' }),
      knex('dept').insert({ name: 'Paint', dept_id: '24' }),
      knex('dept').insert({ name: 'Hardware', dept_id: '25' })
    ]))
    .then(() => Promise.all([
      knex('class').insert({ class_id: '1', name: 'Plywood', dept_id: '21' }),
      knex('class').insert({ class_id: '1', name: 'Insulation', dept_id: '22' }),
      knex('class').insert({ class_id: '1', name: 'Carpeting', dept_id: '23' }),
      knex('class').insert({ class_id: '1', name: 'Caulks', dept_id: '24' }),
      knex('class').insert({ class_id: '1', name: 'Hand Tools', dept_id: '25' }),
      knex('class').insert({ class_id: '2', name: 'Siding', dept_id: '21' }),
      knex('class').insert({ class_id: '2', name: 'Ladders', dept_id: '22' }),
      knex('class').insert({ class_id: '2', name: 'Area Rugs', dept_id: '23' }),
      knex('class').insert({ class_id: '2', name: 'Spray Paint', dept_id: '24' }),
      knex('class').insert({ class_id: '2', name: 'Fastening Tools', dept_id: '25' }),
      knex('class').insert({ class_id: '3', name: 'Composition', dept_id: '21' }),
      knex('class').insert({ class_id: '3', name: 'Concrete', dept_id: '22' }),
      knex('class').insert({ class_id: '3', name: 'Vinyl Flooring', dept_id: '23' }),
      knex('class').insert({ class_id: '3', name: 'Adhesives', dept_id: '24' }),
      knex('class').insert({ class_id: '3', name: 'Fasteners', dept_id: '25' }),
      knex('class').insert({ class_id: '4', name: 'Boards', dept_id: '21' }),
      knex('class').insert({ class_id: '4', name: 'Roofing', dept_id: '22' }),
      knex('class').insert({ class_id: '4', name: 'Ceiling', dept_id: '23' }),
      knex('class').insert({ class_id: '4', name: 'Tape', dept_id: '24' }),
      knex('class').insert({ class_id: '4', name: 'Generators', dept_id: '25' }),
      knex('class').insert({ class_id: '5', name: 'Studs', dept_id: '21' }),
      knex('class').insert({ class_id: '5', name: 'Gypsum', dept_id: '22' }),
      knex('class').insert({ class_id: '5', name: 'Floor and Wall Tile', dept_id: '23' }),
      knex('class').insert({ class_id: '5', name: 'Tarps', dept_id: '24' }),
      knex('class').insert({ class_id: '5', name: 'Portable Power', dept_id: '25' })
    ]))
    .then(() => Promise.all([
      knex('subclass').insert({ name: 'Black Stripe', subclass_id: '1', dept_id: '21', class_id: '1' }),
      knex('subclass').insert({ name: 'Sheathing', subclass_id: '2', dept_id: '21', class_id: '1' }),
      knex('subclass').insert({ name: 'Plywood', subclass_id: '2', dept_id: '21', class_id: '2' }),
      knex('subclass').insert({ name: 'Waferboard', subclass_id: '3', dept_id: '21', class_id: '2' })

    ]))
    .then(() => Promise.all([
      knex('byo').insert({ name: 'Southeast', number: '1' }),
      knex('byo').insert({ name: 'Southwest', number: '2' }),
      knex('byo').insert({ name: 'Northeast', number: '3' }),
      knex('byo').insert({ name: 'Northwest', number: '4' }),
      knex('byo').insert({ name: 'Pacific', number: '5' }),
      knex('byo').insert({ name: 'Expo', number: '6' }),
      knex('byo').insert({ name: 'Midwest', number: '7' }),
      knex('byo').insert({ name: 'Mountain', number: '8' }),
      knex('byo').insert({ name: 'Urban', number: '9' }),
      knex('byo').insert({ name: 'Southern', number: '10' })
    ]))
    .then(() => Promise.all([
      knex('sku').insert({ sku: '124512', desc: '21', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '1', subclass_id: '1' }),
      knex('sku').insert({ sku: '124513', desc: '22', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '1', subclass_id: '1' }),
      knex('sku').insert({ sku: '124514', desc: '23', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '1', subclass_id: '2' }),
      knex('sku').insert({ sku: '124515', desc: '24', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '1', subclass_id: '2' }),
      knex('sku').insert({ sku: '124516', desc: '25', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '1', subclass_id: '2' }),
      knex('sku').insert({ sku: '124517', desc: '26', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '2', subclass_id: '3' }),
      knex('sku').insert({ sku: '124518', desc: '27', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '2', subclass_id: '3' }),
      knex('sku').insert({ sku: '124519', desc: '28', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '2', subclass_id: '3' }),
      knex('sku').insert({ sku: '124520', desc: '29', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '2', subclass_id: '2' }),
      knex('sku').insert({ sku: '124521', desc: '30', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '2', subclass_id: '2' }),
      knex('sku').insert({ sku: '124522', desc: '59', type: '(D) Normal', reg_desc: 'This shows at the register', dept_id: '21', class_id: '2', subclass_id: '2' })
    ]))
    .then(() => Promise.all([
      knex('byo_desc').insert({ desc: 'new stuff', reg_desc: 'replace this', byo_id: '5', sku: '124512' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '7', sku: '124512' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '7', sku: '124513' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '9', sku: '124514' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '9', sku: '124512' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '10', sku: '124516' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '3', sku: '124512' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '3', sku: '124515' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '2', sku: '124512' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '1', sku: '124514' }),
      knex('byo_desc').insert({ desc: '', reg_desc: '', byo_id: '1', sku: '124512' })
    ]));
};
