const IMGS = [
  "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&auto=format&fit=crop&q=60", // Apple iPhone 15 Pro Max
  "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&auto=format&fit=crop&q=60", // Samsung Galaxy S24 Ultra
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=60", // Apple MacBook Pro
  "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&auto=format&fit=crop&q=60", // Apple Watch Series 9
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop&q=60", // Canon EOS R50
  "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop&q=60", // JBL Charge 5
  "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&auto=format&fit=crop&q=60", // Men's Oxford Shirt
  "https://images.unsplash.com/photo-1544550516-f52f36f6d218?w=400&auto=format&fit=crop&q=60", // Men's Winter Puffer Jacket
  "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop&q=60", // Men's Slim Denim Jeans
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=60", // Men's Running Shoes
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&auto=format&fit=crop&q=60", // Women's Floral Wrap Midi Dress
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&auto=format&fit=crop&q=60", // Women's High-Waist Flared Skirt
  "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=60", // Women's Block Heel Pumps
  "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&auto=format&fit=crop&q=60", // Women's Cotton Palazzo Pants
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=60", // 18K Gold Plated Mangalsutra
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&auto=format&fit=crop&q=60", // Sterling Silver Diamond Ring
  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&auto=format&fit=crop&q=60", // Kundan Choker Necklace Set
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format&fit=crop&q=60"  // Rose Gold Cuff Bracelet
];

const P=[
  {id:1,cat:"electronics",t:"Apple iPhone 15 Pro Max 256GB — Natural Titanium",    p:134900,m:159900,r:5,rv:4821,i:0},
  {id:2,cat:"electronics",t:"Samsung Galaxy S24 Ultra 5G — 256GB Titanium Black",  p:89999, m:109999,r:4,rv:2310,i:1},
  {id:3,cat:"electronics",t:"Apple MacBook Pro 14-inch M3 — 16GB 512GB SSD",       p:149999,m:179900,r:5,rv:1890,i:2},
  {id:4,cat:"electronics",t:"Apple Watch Series 9 GPS 45mm Midnight Aluminium",    p:41900, m:49900, r:5,rv:1540,i:3},
  {id:5,cat:"electronics",t:"Canon EOS R50 Mirrorless Camera + 18-45mm Lens",      p:74999, m:89999, r:4,rv:620, i:4},
  {id:6,cat:"electronics",t:"JBL Charge 5 Portable Bluetooth Speaker Waterproof",  p:14999, m:19999, r:4,rv:3410,i:5},
  {id:7,cat:"mens",       t:"Men's Premium Slim Fit Oxford Shirt — Sky Blue",       p:1299,  m:2499,  r:4,rv:3820,i:6},
  {id:8,cat:"mens",       t:"Men's Quilted Winter Puffer Jacket with Hood",         p:2499,  m:4499,  r:4,rv:870, i:7},
  {id:9,cat:"mens",       t:"Men's Slim Fit Stretch Denim Jeans — Dark Blue",       p:1299,  m:2399,  r:4,rv:1670,i:8},
  {id:10,cat:"mens",      t:"Men's Lightweight Running Sports Shoes — White",       p:1899,  m:3499,  r:4,rv:2100,i:9},
  {id:11,cat:"womens",    t:"Women's Floral Wrap Midi Dress — Summer Collection",   p:1799,  m:3299,  r:4,rv:4200,i:10},
  {id:12,cat:"womens",    t:"Women's High-Waist Flared Skirt — Olive Green",        p:899,   m:1699,  r:4,rv:1340,i:11},
  {id:13,cat:"womens",    t:"Women's Block Heel Pumps — Nude Beige",               p:2199,  m:3999,  r:4,rv:870, i:12},
  {id:14,cat:"womens",    t:"Women's Cotton Palazzo Pants — Free Size, Beige",      p:599,   m:1199,  r:4,rv:2780,i:13},
  {id:15,cat:"jewelry",   t:"18K Gold Plated Layered Mangalsutra Necklace",         p:1499,  m:2999,  r:5,rv:1230,i:14},
  {id:16,cat:"jewelry",   t:"Sterling Silver Solitaire Diamond Ring — 0.25 ct",    p:6999,  m:12999, r:5,rv:820, i:15},
  {id:17,cat:"jewelry",   t:"Kundan Choker Necklace Set with Earrings — Bridal",   p:2199,  m:4499,  r:4,rv:640, i:16},
  {id:18,cat:"jewelry",   t:"Rose Gold Cuff Bracelet with Crystal Accents",         p:899,   m:1799,  r:4,rv:398, i:17},
];
const CATS={all:"All Products",electronics:"Electronics",mens:"Men's Clothing",womens:"Women's Clothing",jewelry:"Jewelry"};
let cart=[],cat="all",q="";

const $=id=>document.getElementById(id);
const fmt=n=>"₹"+n.toLocaleString("en-IN");
const disc=(p,m)=>m?Math.round((1-p/m)*100):0;
const stars=r=>'<span style="color:#f3a847">'+"★".repeat(r)+"☆".repeat(5-r)+"</span>";

function render(){
  const list=P.filter(p=>(cat==="all"||p.cat===cat)&&p.t.toLowerCase().includes(q.toLowerCase()));
  $("title").textContent=CATS[cat]||"Results";
  $("cnt2").textContent=list.length+" results";
  if(!list.length){$("grid").innerHTML='<p class="nores">No products found.</p>';return;}
  $("grid").innerHTML=list.map(p=>{
    const d=disc(p.p,p.m);
    return`<div class="card">
      <div class="card-img"><img src="${IMGS[p.i]}" alt="${p.t}">${d?`<span class="badge">${d}% off</span>`:""}
      </div>
      <div class="body">
        <div class="cat">${CATS[p.cat]}</div>
        <div class="ptitle">${p.t}</div>
        <div class="row-stars">${stars(p.r)}<span class="rcount">(${p.rv.toLocaleString()})</span></div>
        <div class="prow"><span class="price">${fmt(p.p)}</span>${p.m?`<span class="mrp">${fmt(p.m)}</span>`:""}</div>
        <div class="del">✓ FREE delivery Tomorrow</div>
        <button class="addbtn" onclick="add(${p.id},this)">Add to Cart</button>
      </div></div>`;
  }).join("");
}

function add(id,btn){
  const x=cart.find(i=>i.id===id);x?x.q++:cart.push({id,q:1});
  renderCart();toast("✓ Added to cart");
  btn.textContent="Added ✓";btn.classList.add("done");
  setTimeout(()=>{btn.textContent="Add to Cart";btn.classList.remove("done");},1300);
}
function chg(id,d){
  const x=cart.find(i=>i.id===id);if(!x)return;
  x.q+=d;if(x.q<=0)cart=cart.filter(i=>i.id!==id);
  renderCart();
}
function renderCart(){
  const total=cart.reduce((s,i)=>s+(P.find(p=>p.id===i.id)?.p||0)*i.q,0);
  const qty=cart.reduce((s,i)=>s+i.q,0);
  $("cnt").textContent=qty;$("tot").textContent=fmt(total);
  if(!cart.length){$("citems").innerHTML='<p class="empty">Your cart is empty.</p>';return;}
  $("citems").innerHTML=cart.map(item=>{
    const p=P.find(x=>x.id===item.id);
    return`<div class="ci"><img src="${IMGS[p.i]}" alt="${p.t}">
      <div class="ci-info"><div class="ci-t">${p.t}</div><div class="ci-p">${fmt(p.p)}</div>
      <div class="qty"><button onclick="chg(${p.id},-1)">−</button><span>${item.q}</span>
      <button onclick="chg(${p.id},1)">+</button><button class="rm" onclick="chg(${p.id},-99)">Remove</button>
      </div></div></div>`;
  }).join("");
}
function toggleCart(){$("cart").classList.toggle("open");$("ov").classList.toggle("show");}
function filter(c){cat=c;q="";$("q").value="";$("catSel").value=c;render();}
function search(){q=$("q").value.trim();cat=$("catSel").value;render();}
function checkout(){
  if(!cart.length){toast("Cart is empty");return;}
  const t=fmt(cart.reduce((s,i)=>s+(P.find(p=>p.id===i.id)?.p||0)*i.q,0));
  cart=[];renderCart();$("cart").classList.remove("open");$("ov").classList.remove("show");
  toast("🎉 Order placed! "+t);
}
let tt;function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>el.classList.remove("show"),2000);}
render();renderCart();