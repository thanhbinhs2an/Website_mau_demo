(function(){
"use strict";
var ICONS = {
  bom: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/></svg>',
  dongco: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 10h3a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-3M6 7V5M10 7V5M6 19v-2M13 19v-2"/></svg>',
  khinen: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="9" width="15" height="8" rx="2"/><circle cx="20" cy="17" r="1.6"/><path d="M6 9V6.5A2.5 2.5 0 0 1 8.5 4H12a2.5 2.5 0 0 1 2.5 2.5V9M5 21h11"/></svg>',
  van: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h18M12 14V7"/><circle cx="12" cy="5" r="2.4"/><path d="M7 14v4M17 14v4M5 21h4M15 21h4"/></svg>',
  bangtai: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="10" width="19" height="5" rx="2.5"/><circle cx="7" cy="12.5" r="1"/><circle cx="12" cy="12.5" r="1"/><circle cx="17" cy="12.5" r="1"/><path d="M5 15v4M19 15v4M9 10V6.5h6V10"/></svg>',
  tudien: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2.5" width="14" height="19" rx="1.5"/><path d="M13 6 10 12h4l-3 6"/><circle cx="16.5" cy="18.5" r=".6" fill="currentColor"/></svg>',
  cnc: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M12 8v4M10 12h4l-2 3zM7 21h10M12 17v4"/></svg>'
};
var CATEGORIES = [
  {id:"bom", name:"Bơm công nghiệp", desc:"Bơm ly tâm, bơm chìm, bơm định lượng cho nước & hóa chất", icon:"bom"},
  {id:"dong-co", name:"Động cơ & truyền động", desc:"Động cơ 3 pha, hộp giảm tốc, biến tần đồng bộ dây chuyền", icon:"dongco"},
  {id:"khi-nen", name:"Khí nén", desc:"Máy nén khí trục vít, bình tích áp, máy sấy khí", icon:"khinen"},
  {id:"van", name:"Van & phụ kiện đường ống", desc:"Van cổng, van bi, van bướm inox & gang theo DN/PN", icon:"van"},
  {id:"bang-tai", name:"Băng tải & nâng hạ", desc:"Băng tải theo yêu cầu, palang xích điện, thiết bị nâng", icon:"bangtai"},
  {id:"tu-dien", name:"Tủ điện & tự động hóa", desc:"Tủ điều khiển PLC/HMI, tủ phân phối theo sơ đồ riêng", icon:"tudien"},
  {id:"may-gia-cong", name:"Máy gia công", desc:"Trung tâm gia công CNC, máy phay, máy tiện cho xưởng cơ khí", icon:"cnc"}
];
var CAT_NAME = {}; CATEGORIES.forEach(function(c){CAT_NAME[c.id]=c.name;});
/* May gia cong dung chung nhom truyen dong de loc gon — tach rieng bang category rieng */
CAT_NAME["may-gia-cong"] = "Máy gia công";

var PRODUCTS = [
  {id:"p1", sku:"MP-BOM-ISG80", name:"Bơm ly tâm trục ngang ISG 80-160", cat:"bom", img:"images/img-1d3083d9.jpg", alt:"Dãy bơm ly tâm công nghiệp màu xanh trong kho", price:18500000, unit:"cái", stock:"in", featured:1,
   short:[["Lưu lượng","45 m³/h"],["Cột áp","32 m"],["Công suất","7.5 kW"]],
   desc:"Bơm ly tâm một tầng cánh trục ngang cho cấp nước tòa nhà, hệ thống làm mát và tưới công nghiệp. Thân gang, cánh đồng, phớt cơ khí chịu nhiệt.",
   specs:[["Model","ISG 80-160"],["Lưu lượng định mức","45 m³/h"],["Cột áp định mức","32 m"],["Công suất động cơ","7.5 kW / 380V"],["Đường kính hút / đẩy","DN80 / DN65"],["Nhiệt độ chất lỏng","0 – 80 °C"],["Vật liệu thân / cánh","Gang HT200 / Đồng"],["Bảo hành mẫu","12 tháng"]]},
  {id:"p2", sku:"MP-BOM-WQ65", name:"Bơm chìm nước thải WQ 65-25", cat:"bom", img:"images/img-3163502f.jpg", alt:"Bơm công nghiệp thân gang kèm động cơ điện", price:null, unit:"cái", stock:"order", featured:0,
   short:[["Lưu lượng","25 m³/h"],["Cột áp","18 m"],["Họng xả","DN65"]],
   desc:"Bơm chìm chuyên cho hố ga, trạm xử lý nước thải và thoát nước tầng hầm. Cánh chống tắc, có phiên bản kèm dao cắt rác theo yêu cầu.",
   specs:[["Model","WQ 65-25-18"],["Lưu lượng định mức","25 m³/h"],["Cột áp định mức","18 m"],["Công suất động cơ","3 kW / 380V"],["Họng xả","DN65"],["Hạt rắn đi qua tối đa","25 mm"],["Cấp bảo vệ","IP68"],["Bảo hành mẫu","12 tháng"]]},
  {id:"p3", sku:"MP-DC-IE3-15", name:"Động cơ điện 3 pha IE3 15 kW", cat:"dong-co", img:"images/img-925fc8d9.jpg", alt:"Động cơ điện công nghiệp 3 pha màu xanh, chụp nền trắng", price:28900000, unit:"cái", stock:"in", featured:1,
   short:[["Công suất","15 kW"],["Tốc độ","1.450 v/p"],["Hiệu suất","IE3"]],
   desc:"Động cơ không đồng bộ 3 pha hiệu suất cao IE3, vỏ gang, phù hợp chạy liên tục cho bơm, quạt, băng tải và máy nén nhỏ.",
   specs:[["Công suất","15 kW (20 HP)"],["Điện áp","380V / 50Hz"],["Tốc độ","1.450 vòng/phút (4 cực)"],["Cấp hiệu suất","IE3"],["Cấp bảo vệ / cách điện","IP55 / F"],["Kiểu lắp","Chân đế B3"],["Khung máy","160L"],["Bảo hành mẫu","18 tháng"]]},
  {id:"p4", sku:"MP-GT-NMRV90", name:"Hộp giảm tốc trục vít NMRV 90 + động cơ", cat:"dong-co", img:"images/img-b48b889f.jpg", alt:"Động cơ hộp giảm tốc công nghiệp màu xám, chụp nền trắng", price:6750000, unit:"bộ", stock:"in", featured:0,
   short:[["Tỉ số truyền","10 – 60"],["Mô-men ra","≤ 480 Nm"],["Động cơ kèm","0.75 – 2.2 kW"]],
   desc:"Cụm động cơ – hộp giảm tốc trục vít vỏ nhôm/gang, lắp mặt bích, dùng cho băng tải nhẹ, máy đóng gói và cơ cấu khuấy.",
   specs:[["Model","NMRV 90"],["Tỉ số truyền","10 / 15 / 20 / 30 / 40 / 60"],["Mô-men xoắn ra tối đa","480 Nm"],["Động cơ đi kèm","0.75 – 2.2 kW, 4 cực"],["Trục ra","Ø35 mm"],["Kiểu lắp","Mặt bích / chân đế"],["Cấp bảo vệ động cơ","IP55"],["Bảo hành mẫu","12 tháng"]]},
  {id:"p5", sku:"MP-KN-TV22", name:"Máy nén khí trục vít 22 kW (có biến tần)", cat:"khi-nen", img:"images/img-a5dd7784.webp", alt:"Máy nén khí trục vít công nghiệp màu xanh trong nhà xưởng", price:148000000, unit:"máy", stock:"low", featured:1,
   short:[["Lưu lượng","3.2 m³/phút"],["Áp suất","8 bar"],["Công suất","22 kW"]],
   desc:"Máy nén khí trục vít ngâm dầu, tùy chọn biến tần tiết kiệm điện cho xưởng chạy 2–3 ca. Tích hợp bộ tách dầu và điều khiển màn hình cảm ứng.",
   specs:[["Công suất","22 kW (30 HP)"],["Lưu lượng khí","3.2 m³/phút @ 8 bar"],["Áp suất làm việc","7 – 10 bar (tùy chọn)"],["Kiểu truyền động","Trực tiếp / biến tần"],["Độ ồn","≤ 68 dB(A)"],["Đầu nén","Trục vít một cấp"],["Điều khiển","PLC + màn hình cảm ứng"],["Bảo hành mẫu","12 tháng (đầu nén 24 tháng)"]]},
  {id:"p6", sku:"MP-VAN-GZ41", name:"Van cổng inox 304 mặt bích DN100", cat:"van", img:"images/img-db75c7ce.jpg", alt:"Cụm van công nghiệp inox trên nền trắng", price:3250000, unit:"cái", stock:"in", featured:0,
   short:[["Kích thước","DN100"],["Áp suất","PN16"],["Vật liệu","Inox 304"]],
   desc:"Van cổng ty nổi mặt bích inox 304 cho đường ống nước, hơi nhẹ và hóa chất loãng. Gioăng PTFE, tay quay gang dẻo.",
   specs:[["Model","GZ41W-16P"],["Kích thước","DN100 (4 inch)"],["Áp suất danh nghĩa","PN16"],["Vật liệu thân / đĩa","Inox 304 / Inox 304"],["Gioăng làm kín","PTFE"],["Kết nối","Mặt bích theo JIS 10K / DIN PN16"],["Nhiệt độ làm việc","-20 – 180 °C"],["Bảo hành mẫu","12 tháng"]]},
  {id:"p7", sku:"MP-BT-PVC600", name:"Băng tải PVC khung thép sơn tĩnh điện", cat:"bang-tai", img:"images/img-81652fe2.jpg", alt:"Hệ thống băng tải công nghiệp trải dài trong nhà xưởng", price:null, unit:"mét dài", stock:"order", featured:1,
   short:[["Khổ băng","400 – 800 mm"],["Tải trọng","≤ 60 kg/m"],["Dẫn động","Động cơ giảm tốc"]],
   desc:"Băng tải dây PVC xanh cho đóng gói, thực phẩm khô và logistics. Gia công theo chiều dài thực tế, có tùy chọn băng PVC trắng thực phẩm và con lăn inox.",
   specs:[["Khổ băng","400 / 500 / 600 / 800 mm"],["Dây băng","PVC 2 lớp, dày 2 mm"],["Tải trọng","Tối đa 60 kg/m"],["Tốc độ băng","5 – 25 m/phút (chỉnh biến tần)"],["Khung","Thép sơn tĩnh điện / inox 304 (tùy chọn)"],["Dẫn động","Động cơ giảm tốc 0.4 – 1.5 kW"],["Chiều dài","Gia công theo yêu cầu"],["Bảo hành mẫu","12 tháng"]]},
  {id:"p8", sku:"MP-TD-PLC400", name:"Tủ điện điều khiển PLC cho dây chuyền", cat:"tu-dien", img:"images/img-b28c31b4.png", alt:"Tủ điện điều khiển công nghiệp với aptomat và dây đấu nối bên trong", price:null, unit:"tủ", stock:"order", featured:0,
   short:[["PLC","Theo thiết kế"],["HMI","7 – 10 inch"],["Vỏ tủ","Thép sơn tĩnh điện"]],
   desc:"Thiết kế và lắp ráp tủ điều khiển theo sơ đồ của khách: PLC, HMI, biến tần, khởi động mềm. Bàn giao kèm bản vẽ điện và chương trình mẫu.",
   specs:[["Kích thước vỏ","Theo thiết kế (chuẩn 400–1200 mm)"],["Vỏ tủ","Thép 1.5 mm sơn tĩnh điện, IP54"],["PLC","Siemens / Mitsubishi / Delta (tùy chọn)"],["HMI","7 – 10 inch"],["Thiết bị đóng cắt","Theo yêu cầu kỹ thuật"],["Đấu nối","Có máng cáp, đầu cốt đánh số"],["Hồ sơ bàn giao","Bản vẽ điện + file chương trình"],["Bảo hành mẫu","12 tháng"]]},
  {id:"p9", sku:"MP-NH-CD2T", name:"Palang xích điện 2 tấn, nâng cao 6 m", cat:"bang-tai", img:"images/img-eccf3659.jpg", alt:"Palang xích điện công nghiệp màu cam treo trên dầm chữ I", price:24500000, unit:"bộ", stock:"in", featured:0,
   short:[["Tải trọng","2 tấn"],["Chiều cao nâng","6 m"],["Điều khiển","Tay bấm 24V"]],
   desc:"Palang xích điện cố định/di chuyển dầm I cho xưởng cơ khí và kho hàng. Xích tải hợp kim, móc cẩu có chốt an toàn, giới hạn hành trình 2 chiều.",
   specs:[["Tải trọng","2.000 kg"],["Chiều cao nâng","6 m (tùy chọn 3 – 12 m)"],["Tốc độ nâng","6.6 m/phút"],["Động cơ","1.5 kW / 380V"],["Xích tải","Hợp kim G80, Ø7.1 mm"],["Điều khiển","Tay bấm 24V, nút dừng khẩn"],["Cấp bảo vệ","IP55"],["Bảo hành mẫu","12 tháng"]]},
  {id:"p10", sku:"MP-CNC-VMC850", name:"Trung tâm gia công CNC VMC850", cat:"may-gia-cong", img:"images/img-15e4a319.jpg", alt:"Trung tâm gia công CNC cỡ lớn trong nhà máy cơ khí", price:null, unit:"máy", stock:"order", featured:1,
   short:[["Hành trình X/Y/Z","800×500×500"],["Trục chính","BT40, 8.000 v/p"],["Hệ điều hành","Fanuc / Siemens"]],
   desc:"Máy phay đứng CNC 3 trục cho gia công khuôn và chi tiết cơ khí chính xác. Bàn giao kèm chạy thử, đào tạo vận hành cơ bản tại xưởng khách.",
   specs:[["Hành trình X / Y / Z","800 / 500 / 500 mm"],["Bàn máy","1.000 × 500 mm, tải 600 kg"],["Trục chính","BT40, 8.000 vòng/phút"],["Ổ dao","24 dao dạng tay gắp"],["Hệ điều hành","Fanuc 0i-MF / Siemens 828D"],["Độ chính xác định vị","±0.005 mm"],["Công suất trục chính","7.5 / 11 kW"],["Bảo hành mẫu","12 tháng"]]}
];

var state = { cat:"all", q:"", stock:"all", sort:"featured" };
var quote = {}; /* id -> qty */
PRODUCTS.forEach(function(p){ /* counts */ });
function catCount(id){ return PRODUCTS.filter(function(p){return p.cat===id;}).length; }
function fmtPrice(n){ return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".") + "₫"; }
function stockInfo(s){ return s==="in" ? ["Còn hàng",""] : s==="low" ? ["Sắp hết"," low"] : ["Đặt hàng"," low"]; }

/* Categories */
var catGrid = document.getElementById("catGrid");
catGrid.innerHTML = CATEGORIES.map(function(c){
  return '<button class="cat-card" type="button" data-cat="'+c.id+'"><span class="cat-ico">'+ICONS[c.icon]+'</span><span><h3>'+c.name+'</h3><p>'+c.desc+'</p></span><span class="cnt">'+catCount(c.id)+' SP mẫu</span></button>';
}).join("");
catGrid.addEventListener("click", function(e){
  var b = e.target.closest("[data-cat]"); if(!b) return;
  setCategory(b.getAttribute("data-cat"));
  document.getElementById("san-pham").scrollIntoView({behavior:"smooth"});
});

/* Pills */
var pillsEl = document.getElementById("catPills");
var pillCats = [{id:"all", name:"Tất cả"}].concat(CATEGORIES);
function renderPills(){
  pillsEl.innerHTML = pillCats.map(function(c){
    return '<button class="pill'+(state.cat===c.id?" active":"")+'" type="button" data-pill="'+c.id+'">'+c.name+'</button>';
  }).join("");
}
pillsEl.addEventListener("click", function(e){
  var b = e.target.closest("[data-pill]"); if(!b) return;
  setCategory(b.getAttribute("data-pill"));
});
function setCategory(id){ state.cat = id; renderPills(); renderProducts(); }
document.querySelectorAll("[data-foot-cat]").forEach(function(a){
  a.addEventListener("click", function(){ setCategory(a.getAttribute("data-foot-cat")); });
});

/* Filters */
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function(){ state.q = searchInput.value.trim().toLowerCase(); renderProducts(); });
document.getElementById("stockFilter").addEventListener("change", function(e){ state.stock = e.target.value; renderProducts(); });
document.getElementById("sortSelect").addEventListener("change", function(e){ state.sort = e.target.value; renderProducts(); });
document.getElementById("resetFilters").addEventListener("click", function(){
  state = {cat:"all", q:"", stock:"all", sort:"featured"};
  searchInput.value=""; document.getElementById("stockFilter").value="all"; document.getElementById("sortSelect").value="featured";
  renderPills(); renderProducts();
});
document.getElementById("heroSearch").addEventListener("submit", function(e){
  e.preventDefault();
  var v = document.getElementById("heroSearchInput").value.trim();
  searchInput.value = v; state.q = v.toLowerCase(); renderProducts();
  document.getElementById("san-pham").scrollIntoView({behavior:"smooth"});
});

function matches(p){
  if(state.cat!=="all" && p.cat!==state.cat) return false;
  if(state.stock!=="all" && p.stock!==state.stock) return false;
  if(state.q){
    var hay = (p.name+" "+p.sku+" "+(CAT_NAME[p.cat]||"")+" "+p.short.map(function(s){return s[0]+" "+s[1];}).join(" ")+" "+p.specs.map(function(s){return s[0]+" "+s[1];}).join(" ")).toLowerCase();
    if(hay.indexOf(state.q)===-1) return false;
  }
  return true;
}

var grid = document.getElementById("productGrid");
function renderProducts(){
  var list = PRODUCTS.filter(matches);
  if(state.sort==="price-asc") list.sort(function(a,b){ return (a.price===null?Infinity:a.price)-(b.price===null?Infinity:b.price); });
  if(state.sort==="price-desc") list.sort(function(a,b){ return (b.price===null?-1:b.price)-(a.price===null?-1:a.price); });
  if(state.sort==="name") list.sort(function(a,b){ return a.name.localeCompare(b.name,"vi"); });
  if(state.sort==="featured") list.sort(function(a,b){ return b.featured-a.featured; });
  document.getElementById("resultLine").innerHTML = "Hiển thị <b>"+list.length+"</b> / "+PRODUCTS.length+" sản phẩm mẫu" + (state.cat!=="all" ? " trong nhóm <b>"+(CAT_NAME[state.cat]||"")+"</b>" : "");
  document.getElementById("emptyState").classList.toggle("show", list.length===0);
  grid.innerHTML = list.map(function(p){
    var st = stockInfo(p.stock);
    var priceHtml = p.price===null
      ? '<span class="price contact">Liên hệ báo giá</span>'
      : '<span class="price">'+fmtPrice(p.price)+'</span><small>/ '+p.unit+' · giá mẫu, chưa VAT</small>';
    var inQuote = quote[p.id] ? 'Đã thêm ('+quote[p.id]+')' : '＋ Báo giá';
    return '<article class="card">'
      + '<div class="card-img"><img src="'+p.img+'" alt="'+p.alt+'" loading="lazy" /><span class="badge-stock'+st[1]+'">'+st[0]+'</span><span class="badge-cat">'+(CAT_NAME[p.cat]||"")+'</span></div>'
      + '<div class="card-body"><span class="sku">'+p.sku+'</span><h3>'+p.name+'</h3>'
      + '<ul class="spec-list">'+p.short.map(function(s){return "<li><span>"+s[0]+"</span><b>"+s[1]+"</b></li>";}).join("")+'</ul>'
      + '<div class="price-row">'+priceHtml+'</div>'
      + '<div class="card-actions"><button class="btn btn-ghost btn-sm" type="button" data-detail="'+p.id+'">Chi tiết</button>'
      + '<button class="btn btn-accent btn-sm" type="button" data-add="'+p.id+'">'+inQuote+'</button></div>'
      + '</div></article>';
  }).join("");
}
grid.addEventListener("click", function(e){
  var d = e.target.closest("[data-detail]"); var a = e.target.closest("[data-add]");
  if(d) openModal(d.getAttribute("data-detail"));
  if(a){ addToQuote(a.getAttribute("data-add"), 1); }
});

/* Modal */
var modalBackdrop = document.getElementById("modalBackdrop");
function openModal(id){
  var p = PRODUCTS.filter(function(x){return x.id===id;})[0]; if(!p) return;
  var st = stockInfo(p.stock);
  var priceHtml = p.price===null ? '<span class="price contact" style="font-size:1.1rem">Liên hệ báo giá theo cấu hình</span>' : '<span class="price" style="font-size:1.3rem">'+fmtPrice(p.price)+'</span><small> / '+p.unit+' · giá mẫu, chưa gồm VAT</small>';
  document.getElementById("modalContent").innerHTML =
    '<div class="modal-img"><img src="'+p.img+'" alt="'+p.alt+'" /></div>'
    + '<div class="modal-body"><span class="sku">'+p.sku+' · '+(CAT_NAME[p.cat]||"")+' · '+st[0]+'</span>'
    + '<h3>'+p.name+'</h3><p class="desc">'+p.desc+'</p>'
    + '<table class="spec-table">'+p.specs.map(function(s){return "<tr><td>"+s[0]+"</td><td>"+s[1]+"</td></tr>";}).join("")+'</table>'
    + '<div class="price-row" style="margin-bottom:14px">'+priceHtml+'</div>'
    + '<div class="modal-actions"><label style="font-weight:600;font-size:.9rem">Số lượng <span class="qty-ctrl"><button type="button" id="mMinus" aria-label="Giảm">−</button><input id="mQty" value="1" inputmode="numeric" aria-label="Số lượng" /><button type="button" id="mPlus" aria-label="Tăng">+</button></span></label>'
    + '<button class="btn btn-accent" type="button" id="mAdd">Thêm vào giỏ báo giá</button></div></div>';
  modalBackdrop.classList.add("show");
  document.body.style.overflow = "hidden";
  var qty = document.getElementById("mQty");
  document.getElementById("mMinus").addEventListener("click", function(){ qty.value = Math.max(1,(parseInt(qty.value,10)||1)-1); });
  document.getElementById("mPlus").addEventListener("click", function(){ qty.value = (parseInt(qty.value,10)||1)+1; });
  document.getElementById("mAdd").addEventListener("click", function(){ addToQuote(p.id, Math.max(1, parseInt(qty.value,10)||1)); closeModalFn(); });
}
function closeModalFn(){ modalBackdrop.classList.remove("show"); document.body.style.overflow=""; }
document.getElementById("closeModal").addEventListener("click", closeModalFn);
modalBackdrop.addEventListener("click", function(e){ if(e.target===modalBackdrop) closeModalFn(); });

/* Quote */
var drawer = document.getElementById("quoteDrawer"), backdrop = document.getElementById("drawerBackdrop");
function quoteCountTotal(){ return Object.keys(quote).reduce(function(s,k){return s+quote[k];},0); }
function updateQuoteBadges(){
  var n = quoteCountTotal();
  document.querySelectorAll("[data-quote-count]").forEach(function(el){ el.textContent = n; });
  document.getElementById("drawerCount").textContent = n ? "("+n+" dòng hàng)" : "";
  renderQuoteItems();
}
function renderQuoteItems(){
  var box = document.getElementById("quoteItems");
  var ids = Object.keys(quote);
  if(!ids.length){ box.innerHTML = '<div class="q-empty"><p style="font-weight:700;color:var(--ink)">Giỏ báo giá đang trống</p><p>Thêm sản phẩm từ catalog để tạo một danh sách báo giá hoàn chỉnh gửi trong một lần.</p></div>'; return; }
  box.innerHTML = ids.map(function(id){
    var p = PRODUCTS.filter(function(x){return x.id===id;})[0];
    var priceTxt = p.price===null ? "Liên hệ báo giá" : fmtPrice(p.price)+" / "+p.unit;
    return '<div class="q-item"><img src="'+p.img+'" alt="" /><div><h4>'+p.name+'</h4><span class="sku">'+p.sku+' · '+priceTxt+'</span><br /><span class="qty-ctrl"><button type="button" data-qminus="'+id+'" aria-label="Giảm">−</button><input value="'+quote[id]+'" data-qty="'+id+'" inputmode="numeric" aria-label="Số lượng" /><button type="button" data-qplus="'+id+'" aria-label="Tăng">+</button></span></div><button class="q-remove" type="button" data-qremove="'+id+'">Xóa</button></div>';
  }).join("");
}
document.getElementById("quoteItems").addEventListener("click", function(e){
  var m = e.target.closest("[data-qminus]"), pl = e.target.closest("[data-qplus]"), r = e.target.closest("[data-qremove]");
  if(m){ var id=m.getAttribute("data-qminus"); quote[id]--; if(quote[id]<=0) delete quote[id]; syncQuote(); }
  if(pl){ var id2=pl.getAttribute("data-qplus"); quote[id2]++; syncQuote(); }
  if(r){ delete quote[r.getAttribute("data-qremove")]; syncQuote(); }
});
document.getElementById("quoteItems").addEventListener("change", function(e){
  var inp = e.target.closest("[data-qty]"); if(!inp) return;
  var id = inp.getAttribute("data-qty"); var v = parseInt(inp.value,10);
  if(isNaN(v)||v<=0) delete quote[id]; else quote[id]=v;
  syncQuote();
});
function syncQuote(){ updateQuoteBadges(); renderProducts(); }
function addToQuote(id, n){ quote[id] = (quote[id]||0)+n; syncQuote(); showToast("Đã thêm vào giỏ báo giá ("+quoteCountTotal()+" dòng hàng)"); }
function openQuote(){ drawer.classList.add("show"); backdrop.classList.add("show"); }
function closeQuote(){ drawer.classList.remove("show"); backdrop.classList.remove("show"); }
document.getElementById("openQuoteTop").addEventListener("click", openQuote);
document.getElementById("openQuoteFloat").addEventListener("click", openQuote);
document.getElementById("closeQuote").addEventListener("click", closeQuote);
backdrop.addEventListener("click", closeQuote);
document.addEventListener("keydown", function(e){ if(e.key==="Escape"){ closeQuote(); closeModalFn(); } });

function quoteText(){
  var ids = Object.keys(quote); if(!ids.length) return "";
  var lines = ["DANH SÁCH YÊU CẦU BÁO GIÁ (từ website mẫu Minh Phát Industrial):",""];
  ids.forEach(function(id, i){
    var p = PRODUCTS.filter(function(x){return x.id===id;})[0];
    lines.push((i+1)+". "+p.name+" ["+p.sku+"] — SL: "+quote[id]+" "+p.unit+" — "+(p.price===null?"Nhờ báo giá":fmtPrice(p.price)+"/"+p.unit+" (giá mẫu)"));
  });
  return lines.join("\n");
}
function copyText(txt, msg){
  function done(){ showToast(msg); }
  if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(txt).then(done, function(){ fallback(); }); } else fallback();
  function fallback(){
    var ta = document.createElement("textarea"); ta.value = txt; ta.style.position="fixed"; ta.style.opacity="0";
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand("copy"); done(); }catch(e){ showToast("Không sao chép tự động được — hãy chọn và copy thủ công."); }
    document.body.removeChild(ta);
  }
}
document.getElementById("copyQuote").addEventListener("click", function(){
  var t = quoteText(); if(!t){ showToast("Giỏ đang trống — hãy thêm sản phẩm trước."); return; }
  copyText(t, "Đã sao chép danh sách báo giá.");
});
document.getElementById("quoteToForm").addEventListener("click", function(){
  var t = quoteText(); if(!t){ showToast("Giỏ đang trống — hãy thêm sản phẩm trước."); return; }
  var msg = document.getElementById("cfMsg");
  msg.value = (msg.value ? msg.value+"\n\n" : "") + t;
  closeQuote();
  document.getElementById("lien-he").scrollIntoView({behavior:"smooth"});
  showToast("Đã điền danh sách vào form liên hệ bên dưới.");
});

/* Contact form -> mailto composer (no fake submit) */
function contactText(){
  var name = document.getElementById("cfName").value.trim();
  var phone = document.getElementById("cfPhone").value.trim();
  var comp = document.getElementById("cfCompany").value.trim();
  var topic = document.getElementById("cfTopic").value;
  var msg = document.getElementById("cfMsg").value.trim();
  return { name:name, phone:phone,
    body: "Họ tên: "+name+"\nĐiện thoại: "+phone+(comp?"\nCông ty/xưởng: "+comp:"")+"\nNhu cầu: "+topic+"\n\nNội dung:\n"+(msg||"(chưa nhập)"),
    topic: topic };
}
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  var c = contactText();
  if(!c.name || !c.phone){ document.getElementById("contactStatus").textContent = "Vui lòng nhập họ tên và số điện thoại để bên bán liên hệ lại."; return; }
  var subject = encodeURIComponent("Yêu cầu "+c.topic+" — "+c.name);
  var body = encodeURIComponent(c.body);
  var mailLink = document.createElement("a");
  mailLink.href = "mailto:baogia@minhphat-industrial.example?subject="+subject+"&body="+body;
  document.body.appendChild(mailLink);
  mailLink.click();
  document.body.removeChild(mailLink);
  document.getElementById("contactStatus").textContent = "Đã mở ứng dụng email với nội dung soạn sẵn. Đây là website mẫu nên địa chỉ nhận cũng là địa chỉ minh họa (.example).";
});
document.getElementById("copyContact").addEventListener("click", function(){
  var c = contactText();
  if(!c.name && !c.phone && !document.getElementById("cfMsg").value.trim()){ showToast("Hãy điền ít nhất một vài thông tin trước khi sao chép."); return; }
  copyText(c.body, "Đã sao chép nội dung yêu cầu.");
});

/* Toast + nav */
var toastTimer;
function showToast(msg){
  var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(function(){ t.classList.remove("show"); }, 2600);
}
var burger = document.getElementById("burger"), nav = document.getElementById("mainNav");
burger.addEventListener("click", function(){
  var open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});
nav.addEventListener("click", function(e){ if(e.target.tagName==="A") nav.classList.remove("open"); });

renderPills(); renderProducts(); updateQuoteBadges();
})();
