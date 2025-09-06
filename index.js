
    // ====== Data ======
    const CATALOG = [
      // Grocery
       {id:'sugar', name:'चीनी', cat:'Grocery', unit:'कट्टा'},
      {id:'rice', name:'चावल', cat:'Grocery', unit:'कट्टा'},
      {id:'kamla', name:'कमला पसंद', cat:'Grocery', unit:'Packet'},
      {id:'gagan', name:'गगन', cat:'Grocery', unit:'Packet'},
      {id:'hathigola', name:'हाथीगौला', cat:'Grocery', unit:'Packet'},
      {id:'kuber', name:'कुबेर', cat:'Grocery', unit:'Packet'},
      {id:'kurkare', name:'G.K कुरकुरे', cat:'Grocery', unit:'Packet'},

      {id:'besan', name:'बेसन', cat:'Grocery', unit:'kg'},
      {id:'Arhar', name:'अरहर दाल', cat:'Grocery', unit:'kg'},
      {id:'urd', name:'उर्द दाल', cat:'Grocery', unit:'kg'},
      {id:'dal_moong', name:' मूंग दाल', cat:'Grocery', unit:'kg'},
      {id:'dal_masoor', name:'मसूर दाल', cat:'Grocery', unit:'kg'},
      {id:'chana_dal', name:'चना दाल', cat:'Grocery', unit:'kg'},
      {id:'boora', name:'बूरा', cat:'Grocery', unit:'kg'},
      {id:'soyabeen_badi', name:'सोयाबीन बड़ी', cat:'Grocery', unit:'kg'},
      {id:'suji', name:'सूजी', cat:'Grocery', unit:'kg'},
      {id:'doodh_peti', name:'दूध पेटी', cat:'Grocery', unit:'पेटी'},
      {id:'aachar', name:'आचार', cat:'Grocery', unit:'डब्बा'},
      {id:'salt', name:'नमक (Salt)', cat:'Grocery', unit:'कट्टा'},
      {id:'oil_mustard', name:'सरसों तेल', cat:'Grocery', unit:'पीपा'},
      {id:'oil_refined', name:'राग Gold', cat:'Grocery', unit:'पेटी'},
      {id:'rai', name:'चाबी माचिश(2)', cat:'Grocery', unit:'packet'},
      {id:'rai', name:'चाबी माचिश(1)', cat:'Grocery', unit:'packet'},
       {id:'rai1', name:'सफल', cat:'Grocery', unit:'packet'},
       {id:'rai2', name:'सूरज', cat:'Grocery', unit:'packet'},
       {id:'rai3', name:'गुलमहक', cat:'Grocery', unit:'packet'},
       {id:'rai4', name:'साई', cat:'Grocery', unit:'packet'},
       {id:'rai5', name:'तोप बीड़ी', cat:'Grocery', unit:'packet'},
       {id:'rai6', name:' 405 बीड़ी', cat:'Grocery', unit:'packet'},
       {id:'rai7', name:'पूजा बीड़ी', cat:'Grocery', unit:'packet'},
       {id:'rai8', name:'Capastan', cat:'Grocery', unit:'Piece'},
       {id:'rai9', name:'Wave', cat:'Grocery', unit:'Piece'},
       {id:'rai10', name:'Zafaran', cat:'Grocery', unit:'Piece'},
       {id:'rai11', name:'GoldFlake', cat:'Grocery', unit:'Piece'},
        {id:'rai11', name:'Perfect', cat:'Grocery', unit:'Piece'},
 
     
     
      
     
     
     



     
      // Masala
      {id:'haldi', name:'हल्दी पाउडर', cat:'Masala', unit:'packet'},
      {id:'mirch', name:'लाल मिर्च पाउडर', cat:'Masala', unit:'packet'},
      {id:'dhania', name:'धनिया पाउडर', cat:'Masala', unit:'packet'},
      {id:'garam', name:'गरम BDM मसाला(2)', cat:'Masala', unit:'packet'},
       {id:'mirchi', name:'लाल मिर्च सूखी', cat:'Masala', unit:'kg'},
      {id:'jeera', name:'जीरा', cat:'Masala', unit:'packet'},
      {id:'jeera1', name:'मंगलदीप धूप(5)', cat:'Masala', unit:'packet'},
      {id:'jeera2', name:'मंगलदीप धूप(10)', cat:'Masala', unit:'packet'},
      {id:'jeera3', name:'तिरंगा अगरवत्ती(5)', cat:'Masala',  unit:'packet'},
       {id:'jeera4', name:'Samrat अगरवत्ती(5)', cat:'Masala', unit:'packet'},
      // Snacks
      {id:'biscuits1', name:'पारले जी', cat:'Snacks', unit:'पेटी'},
      {id:'biscuits2', name:'Mom`s Magic पेटी', cat:'Snacks', unit:'पेटी'},
      {id:'biscuits3', name:'Bounce(Cream) पेटी', cat:'Snacks', unit:'पेटी'},
      {id:'biscuits4', name:'बटर पेटी ', cat:'Snacks', unit:'पेटी'},
      {id:'biscuits5', name:'Twins पेटी ', cat:'Snacks', unit:'पेटी'},
      {id:'biscuits6', name:'Butter Delite पेटी ', cat:'Snacks', unit:'पेटी'},

      {id:'namkeen', name:'चिराग नमकीन(3kg)', cat:'Snacks', unit:'pkt'},
      {id:'noodles', name:'मैगी', cat:'Snacks', unit:'पेटी'},
      {id:'noodles1', name:'माइक्रोनि', cat:'Snacks', unit:'kg'},
      {id:'noodles2', name:'बूम बूम सोया(5)', cat:'Snacks', unit:'बोरा'},
       {id:'noodles3', name:'कटोरी सोया', cat:'Snacks', unit:'बोरा'},
       {id:'noodles4', name:'Free hit', cat:'Snacks', unit:'पेटी'},
       {id:'noodles5', name:'दाल चावल सोया', cat:'Snacks', unit:'ladi'},
       {id:'noodles6', name:'भुजिया(5)', cat:'Snacks', unit:'ladi'},
       {id:'noodles7', name:'Pari(5)', cat:'Snacks', unit:'ladi'},
       {id:'noodles8', name:'Corn Flakes(5)', cat:'Snacks', unit:'ladi'},
       {id:'noodles9', name:'Tede Mede(5)', cat:'Snacks', unit:'ladi'},
       {id:'noodles10', name:'मसाला बूदी(10)', cat:'Snacks', unit:'ladi'},
       {id:'noodles11', name:'दिनेश नमकीन', cat:'Snacks', unit:'ladi'},

       {id:'noodles12', name:'Bone Nipple', cat:'Snacks', unit:'ladi'},



      // Beverage

      {id:'teaa', name:'Pampers', cat:'Beverage', unit:'Ladi'},
      {id:'teab', name:'Double Cream', cat:'Beverage', unit:'pkt'},
      {id:'teac', name:'Boomer', cat:'Beverage', unit:'डब्बा'},
      {id:'tead', name:'Apple टॉफ़ी', cat:'Beverage', unit:'डब्बा'},
      {id:'teae', name:'Coeffe टॉफ़ी', cat:'Beverage', unit:'डब्बा'},
      {id:'teaf', name:'Pulse टॉफ़ी', cat:'Beverage', unit:'डब्बा'},
      {id:'teah', name:'Lollipop', cat:'Beverage', unit:'pkt'},
      {id:'teag', name:'Panni(4cm)', cat:'Beverage', unit:'pkt'},
      {id:'teat', name:'Panni(8cm)', cat:'Beverage', unit:'pkt'},



      {id:'tea2', name:'हींग(5)', cat:'Beverage', unit:'pkt'},
      {id:'tea33', name:'हींग(10)', cat:'Beverage', unit:'pkt'},

      {id:'tea45', name:'Tazza चाय(5)', cat:'Beverage', unit:'pkt'},
      {id:'coffee', name:'Tazza चाय(10)', cat:'Beverage', unit:'Packet'},
      {id:'milk', name:'TC चाय(2)', cat:'Beverage', unit:'Packet'},
      {id:'milk1', name:'पचवाला', cat:'Beverage', unit:'Packet'},
       {id:'milk2', name:'जलजीरा', cat:'Beverage', unit:'Packet'},
       {id:'milk3', name:'बूम बूम ', cat:'Beverage', unit:'Packet'},
       {id:'milk4', name:'निबू चटकारा', cat:'Beverage', unit:'Packet'},
       {id:'milk5', name:'Sweety supari', cat:'Beverage', unit:'Packet'},
        {id:'milk6', name:'गोला', cat:'Beverage', unit:'kg'},
         {id:'milk7', name:'किशमिश', cat:'Beverage', unit:'kg'},
       
      
      // Personal Care
      {id:'soap', name:'शांति आंवला(10)', cat:'Personal Care', unit:'Packet'},
      {id:'soap1', name:'शांति आंवला(20)', cat:'Personal Care', unit:'Packet'},
      {id:'shampoo', name:'Clinik Plus पेटी ', cat:'Personal Care', unit:'bottle'},
      {id:'toothpaste', name:'Sunsilk पेटी', cat:'Personal Care', unit:'tube'},
      {id:'toothpaste1', name:'Vatika', cat:'Personal Care', unit:'Packet'},
      {id:'toothpaste2', name:'Dove', cat:'Personal Care', unit:'ladi'},
      {id:'toothpaste3', name:'Head & Shoulders', cat:'Personal Care', unit:'ladi'},
      {id:'toothpaste4', name:'Fair Lovely', cat:'Personal Care', unit:'Packet'},
      {id:'toothpaste5', name:'Ponds(5)', cat:'Personal Care', unit:'डब्बा'},
       {id:'toothpaste6', name:'Vaseline(5)', cat:'Personal Care', unit:'डब्बा'},
       {id:'toothpaste7', name:'कावेरी मेहदी', cat:'Personal Care', unit:'Packet'},
       {id:'toothpaste8', name:'मिर्ची मेहंदी', cat:'Personal Care', unit:'डब्बा'},
       {id:'toothpaste9', name:'ब्लेड(1)', cat:'Personal Care', unit:'Packet'},
       {id:'toothpaste10', name:'ब्लेड(2)', cat:'Personal Care', unit:'Packet'},
       {id:'toothpaste11', name:'ENO', cat:'Personal Care', unit:'Packet'},
       {id:'toothpaste12', name:'हींग गोली', cat:'Personal Care', unit:'डब्बा'},
       

      // Cleaning
      {id:'detergent', name:'पूजा सर्फ(1kg)', cat:'Cleaning', unit:'कट्टा'},
      {id:'detergent01', name:'पूजा सर्फ(500gm)', cat:'Cleaning', unit:'कट्टा'},
      {id:'detergent02', name:'पूजा सर्फ(10)', cat:'Cleaning', unit:'कट्टा'},
       {id:'detergent03', name:'पूजा सर्फ(5)', cat:'Cleaning', unit:'कट्टा'},
       {id:'detergent04', name:'पूजा साबुन', cat:'Cleaning', unit:' पेटी'},
      {id:'detergent05', name:'पूजा साबुन', cat:'Cleaning', unit:' पेटी'},
      {id:'detergent06', name:'Rin साबुन', cat:'Cleaning', unit:'Packet'},
      {id:'detergent07', name:'Sargam साबुन', cat:'Cleaning', unit:' Packets'},
       {id:'detergent4', name:'Goldy साबुन', cat:'Cleaning', unit:' Packets'},

      {id:'phenyl', name:'दन्त कांति(10)', cat:'Cleaning', unit:'Packet'},
      {id:'dishwash', name:'दन्त कांति(20)', cat:'Cleaning', unit:'Packet'},
      {id:'dishwash1', name:'गुल मंजन', cat:'Cleaning', unit:'Packet'},
      {id:'dishwash2', name:'Razor', cat:'Cleaning', unit:'Packet'},
      {id:'dishwash3', name:'अमीर लोशन', cat:'Cleaning', unit:'Packet'},
       {id:'dishwash4', name:'काली मेहदी', cat:'Cleaning', unit:'Packet'},
       {id:'dishwash5', name:'लाल मेहदी', cat:'Cleaning', unit:'Packet'},
       {id:'dishwash6', name:'Bajaj तेल', cat:'Cleaning', unit:'Packet'},
      {id:'dishwash7', name:'Navratan तेल', cat:'Cleaning', unit:'Packet'},


      {id:'detergent5', name:'No.1', cat:'Cleaning', unit:' Packets'},
      {id:'detergent6', name:'Lux', cat:'Cleaning', unit:' Packets'},
      {id:'detergent7', name:'Lifebuoy', cat:'Cleaning', unit:' Packets'},
      {id:'detergent8', name:'Santoor', cat:'Cleaning', unit:' Packets'},
      {id:'detergent9', name:'Nirma(Nibu)', cat:'Cleaning', unit:' Packets'},
      {id:'detergent10', name:'Dettol', cat:'Cleaning', unit:'Piece'},
       {id:'detergent11', name:'Vim(5)', cat:'Cleaning', unit:'Piece'},
      ];
      
      

    const $ = (s,root=document)=>root.querySelector(s);
    const $$ = (s,root=document)=>[...root.querySelectorAll(s)];

    const state = {
      filter:{cat:'all', q:''},
      list:[], // {id,name,unit,qty,note}
    };

    const storeKey = ()=>'kirana_lists_v1';

    // ====== Catalog Render ======
    function matches(item){
      const catOk = state.filter.cat==='all' || item.cat===state.filter.cat;
      const q = state.filter.q.trim().toLowerCase();
      const qOk = !q || item.name.toLowerCase().includes(q);
      return catOk && qOk;
    }

    function renderCatalog(){
      const wrap = $('#catalog');
      wrap.innerHTML = '';
      CATALOG.filter(matches).forEach(item=>{
        const div = document.createElement('div');
        div.className='item';
        div.innerHTML = `
          <div class="meta">
            <span class="name">${item.name}</span>
            <span class="cat">${item.cat} • Unit: ${item.unit}</span>
          </div>
          <div class="inline">
            <div class="qty" data-id="${item.id}">
              <button aria-label="dec">−</button>
              <span class="val">1</span>
              <button aria-label="inc">+</button>
            </div>
            <button class="btn icon" data-add="${item.id}">Add</button>
          </div>
        `;
        wrap.appendChild(div);
      });
    }

    // ====== List Ops ======
    function addToList(id, qty=1){
      const meta = CATALOG.find(x=>x.id===id) || {id, name:id, unit:'pcs'};
      const existing = state.list.find(x=>x.id===id);
      if(existing){ existing.qty += qty; }
      else{ state.list.push({id:meta.id, name:meta.name, unit:meta.unit, qty:qty, note:''}); }
      renderList();
      autoSave();
    }

    function changeQty(id, delta){
      const it = state.list.find(x=>x.id===id);
      if(!it) return;
      it.qty = Math.max(1, it.qty + delta);
      renderList();
      autoSave();
    }

    function setNote(id, note){
      const it = state.list.find(x=>x.id===id);
      if(!it) return;
      it.note = note;
      autoSaveDebounced();
    }

    function removeItem(id){
      state.list = state.list.filter(x=>x.id!==id);
      renderList();
      autoSave();
    }

    function clearList(){
      if(!confirm('पूरी लिस्ट साफ़ कर दें?')) return;
      state.list = [];
      renderList();
      autoSave();
    }

    function renderList(){
      const body = $('#listBody');
      body.innerHTML = '';
      state.list.forEach((it,idx)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${idx+1}</td>
          <td>${it.name}</td>
          <td>
            <div class="qty">
              <button data-q="-1" data-id="${it.id}">−</button>
              <span class="val">${it.qty}</span>
              <button data-q="1" data-id="${it.id}">+</button>
            </div>
          </td>
          <td>${it.unit}</td>
          <td>
            <input class="note" placeholder="e.g. बासमती / ब्रांड" value="${it.note || ''}" data-note="${it.id}" />
          </td>
          <td class="right">
            <button class="btn danger" data-del="${it.id}">Remove</button>
          </td>
        `;
        body.appendChild(tr);
      });
      $('#totalItems').textContent = state.list.length;
      $('#storeNameView').textContent = $('#storeSelect').value;
    }

    // ====== Filters & Search ======
    function bindFilters(){
      $$('#header .pill').forEach(p=>p.addEventListener('click', onPill));
    }

    // (Direct simple handler without header id)
    $$('.pill').forEach(p=>{
      p.addEventListener('click', (e)=>{
        $$('.pill').forEach(x=>x.classList.remove('active'));
        e.currentTarget.classList.add('active');
        state.filter.cat = e.currentTarget.dataset.cat;
        renderCatalog();
      });
    });

    $('#search').addEventListener('input', (e)=>{
      state.filter.q = e.target.value;
      renderCatalog();
    });

    $('#clearFilters').addEventListener('click', ()=>{
      state.filter = {cat:'all', q:''};
      $('#search').value='';
      $$('.pill').forEach(x=>x.classList.remove('active'));
      $$('.pill')[0].classList.add('active');
      renderCatalog();
    });

    // ====== Catalog interactions (qty & add) ======
    document.addEventListener('click', (e)=>{
      const incWrap = e.target.closest('.qty');
      if(incWrap && incWrap.dataset.id){
        const val = incWrap.querySelector('.val');
        if(e.target.getAttribute('aria-label')==='inc'){ val.textContent = +val.textContent + 1; }
        if(e.target.getAttribute('aria-label')==='dec'){ val.textContent = Math.max(1, +val.textContent - 1); }
      }
      const addBtn = e.target.closest('[data-add]');
      if(addBtn){
        const id = addBtn.dataset.add;
        const qtyBox = addBtn.parentElement.querySelector('.qty .val');
        const qty = qtyBox? +qtyBox.textContent : 1;
        addToList(id, qty);
      }
      const del = e.target.closest('[data-del]');
      if(del){ removeItem(del.dataset.del); }
      const qBtn = e.target.closest('[data-q]');
      if(qBtn){ changeQty(qBtn.dataset.id, +qBtn.dataset.q); }
    });

    document.addEventListener('input', (e)=>{
      const note = e.target.closest('[data-note]');
      if(note){ setNote(note.dataset.note, e.target.value); }
    });

    // ====== Store Switch / Add ======
    $('#addStoreBtn').addEventListener('click', ()=>{
      const name = prompt('नए स्टोर का नाम लिखें:');
      if(!name) return;
      const opt = document.createElement('option');
      opt.value=name; opt.textContent=name;
      $('#storeSelect').appendChild(opt);
      $('#storeSelect').value=name;
      loadForStore();
    });

    $('#storeSelect').addEventListener('change', ()=>{
      loadForStore();
    });

    // ====== Persistence (LocalStorage) ======
    function getAllSaved(){
      try{ return JSON.parse(localStorage.getItem(storeKey())) || {}; }
      catch(e){ return {}; }
    }
    function setAllSaved(obj){
      localStorage.setItem(storeKey(), JSON.stringify(obj));
    }
    function saveForStore(){
      const store = $('#storeSelect').value;
      const all = getAllSaved();
      all[store] = state.list;
      setAllSaved(all);
      toast('Saved');
    }
    function loadForStore(){
      const store = $('#storeSelect').value;
      const all = getAllSaved();
      state.list = Array.isArray(all[store]) ? all[store] : [];
      renderList();
      toast('Loaded: '+store);
    }
    const autoSave = debounce(()=>saveForStore(), 150);
    const autoSaveDebounced = debounce(()=>saveForStore(), 500);

    // ====== Export / Utility ======
    function toText(){
      const store = $('#storeSelect').value;
      let lines = [`Kirana List — ${store}`,'---------------------------'];
      state.list.forEach((it,i)=>{
        const note = it.note? ` (${it.note})` : '';
        lines.push(`${i+1}. ${it.name} — ${it.qty} ${it.unit}${note}`);
      });
      return lines.join('\n');
    }

    function downloadCSV(){
      const rows = [['S.No','Item','Qty','Unit','Note','Store']];
      const store = $('#storeSelect').value;
      state.list.forEach((it,i)=>rows.push([i+1,it.name,it.qty,it.unit,it.note||'',store]));
      const csv = rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
      const blob = new Blob([csv],{type:'text/csv'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href=url; a.download='kirana_list.csv';
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
    }

    function copyToClipboard(){
      const text = toText();
      navigator.clipboard.writeText(text).then(()=>toast('Copied')).catch(()=>{
        prompt('Copy manually:', text);
      });
    }

   function printPDF() {
  const printDiv = document.getElementById("printArea");
  const store = document.getElementById("storeSelect").value;

  let html = `<h2>उमेश वर्मा किराना स्टोर कांधरपुर (9870917090)</h2><hr/><ol>`;
  state.list.forEach(it => {
    const note = it.note ? ` (${it.note})` : "";
    html += `<li>${it.name} — ${it.qty} ${it.unit}${note}</li>`;
  });
  html += "</ol>";

  printDiv.innerHTML = html;

  // अब सीधे उसी पेज को प्रिंट करेंगे
  window.print();
}


    function toast(msg){
      const t = document.createElement('div');
      t.textContent = msg;
      t.style.position='fixed'; t.style.bottom='20px'; t.style.right='20px';
      t.style.background='rgba(36, 197, 94, .95)'; t.style.color='#06270f';
      t.style.padding='10px 14px'; t.style.borderRadius='12px'; t.style.fontWeight='700';
      t.style.boxShadow='0 10px 30px rgba(0,0,0,.3)';
      document.body.appendChild(t);
      setTimeout(()=>t.remove(), 1400);
    }

    function debounce(fn,delay){
      let t; return function(...args){ clearTimeout(t); t=setTimeout(()=>fn.apply(this,args),delay); };
    }

    // ====== Custom Item ======
    $('#addCustomItem').addEventListener('click', ()=>{
      const name = prompt('आइटम का नाम:');
      if(!name) return;
      const unit = prompt('यूनिट (kg/L/pcs/pkt):','pcs') || 'pcs';
      const qty = parseInt(prompt('Qty:', '1')||'1',10) || 1;
      const id = name.toLowerCase().replace(/\s+/g,'_')+'_'+Date.now();
      addToList(id, qty);
      // Update the last added with proper name & unit
      const it = state.list.find(x=>x.id===id);
      if(it){ it.name = name; it.unit = unit; }
      renderList();
      autoSave();
    });

    // ====== Buttons ======
    $('#copyBtn').addEventListener('click', copyToClipboard);
    $('#csvBtn').addEventListener('click', downloadCSV);
    $('#printBtn').addEventListener('click', printPDF);
    $('#clearListBtn').addEventListener('click', clearList);
    $('#saveBtn').addEventListener('click', saveForStore);
    $('#loadBtn').addEventListener('click', loadForStore);

    // ====== Init ========
    renderCatalog();
    loadForStore();