const programs = {
  KSA: [
    { code: "7220201", name: "Tiếng Anh thương mại", quota: 150, cutoff2025: 24.50 },
    { code: "7310101", name: "Kinh tế", quota: 110, cutoff2025: 25.40 },
    { code: "7310102_1", name: "Kinh tế chính trị", quota: 40, cutoff2025: 24.00 },
    { code: "7310102_2", name: "Kinh tế chính trị quốc tế", quota: 40, cutoff2025: null, note: "Chương trình mới 2026" },
    { code: "7310104_1", name: "Kinh tế đầu tư", quota: 200, cutoff2025: 24.05 },
    { code: "7310104_2", name: "Thẩm định giá và Quản trị tài sản", quota: 100, cutoff2025: 22.80 },
    { code: "7310107", name: "Thống kê kinh doanh", quota: 50, cutoff2025: 24.80 },
    { code: "7310108_1", name: "Toán tài chính", quota: 50, cutoff2025: 24.00 },
    { code: "7310108_2", name: "Phân tích rủi ro và định phí bảo hiểm", quota: 50, cutoff2025: 23.00 },
    { code: "7320106_1", name: "Truyền thông số và thiết kế đa phương tiện", quota: 60, cutoff2025: 26.30 },
    { code: "73201061D", name: "Truyền thông số và thiết kế đa phương tiện song bằng", quota: 40, cutoff2025: null },
    { code: "7340101_1", name: "Quản trị kinh doanh", quota: 750, cutoff2025: 24.30 },
    { code: "73401011F", name: "Quản trị - Tiếng Anh toàn phần", quota: 100, cutoff2025: null },
    { code: "7340101_2", name: "Kinh doanh số", quota: 70, cutoff2025: 25.60 },
    { code: "7340101_3", name: "Quản trị bệnh viện", quota: 100, cutoff2025: 22.80 },
    { code: "7340101_4", name: "Quản trị bền vững doanh nghiệp và môi trường", quota: 50, cutoff2025: 23.60 },
    { code: "73401014D", name: "Quản trị bền vững doanh nghiệp và môi trường song bằng", quota: 30, cutoff2025: null },
    { code: "7340115_1", name: "Marketing", quota: 100, cutoff2025: 26.50 },
    { code: "73401151F", name: "Marketing - Tiếng Anh toàn phần", quota: 80, cutoff2025: null },
    { code: "7340115_2", name: "Công nghệ Marketing", quota: 70, cutoff2025: 26.65 },
    { code: "7340116", name: "Bất động sản", quota: 110, cutoff2025: 22.80 },
    { code: "7340120_1", name: "Kinh doanh quốc tế", quota: 320, cutoff2025: 26.30 },
    { code: "73401201F", name: "Kinh doanh quốc tế - Tiếng Anh toàn phần", quota: 250, cutoff2025: null },
    { code: "7340121_1", name: "Kinh doanh thương mại", quota: 170, cutoff2025: 25.80 },
    { code: "73401211F", name: "Kinh doanh thương mại - Tiếng Anh toàn phần", quota: 40, cutoff2025: null },
    { code: "7340122", name: "Thương mại điện tử", quota: 140, cutoff2025: 26.10 },
    { code: "7340201_1", name: "Tài chính công", quota: 50, cutoff2025: 23.80 },
    { code: "7340201_2", name: "Thuế", quota: 100, cutoff2025: 23.50 },
    { code: "7340201_3", name: "Ngân hàng", quota: 220, cutoff2025: 24.40 },
    { code: "73402013F", name: "Ngân hàng - Tiếng Anh toàn phần", quota: 30, cutoff2025: null },
    { code: "7340201_4", name: "Thị trường chứng khoán", quota: 100, cutoff2025: 23.10 },
    { code: "7340201_5", name: "Tài chính", quota: 380, cutoff2025: 24.90 },
    { code: "73402015F", name: "Tài chính - Tiếng Anh toàn phần", quota: 90, cutoff2025: null },
    { code: "7340201_6", name: "Đầu tư tài chính", quota: 40, cutoff2025: 24.40 },
    { code: "73402016F", name: "Đầu tư tài chính - Tiếng Anh toàn phần", quota: 30, cutoff2025: null },
    { code: "7340201_7", name: "Quản trị Hải quan – Ngoại thương", quota: 100, cutoff2025: 25.30 },
    { code: "7340201_D", name: "Nguồn nhân lực quốc tế Tài chính - Ngân hàng song bằng", quota: 40, cutoff2025: 24.50 },
    { code: "7340204", name: "Bảo hiểm", quota: 50, cutoff2025: 22.80 },
    { code: "7340205", name: "Công nghệ tài chính", quota: 70, cutoff2025: 25.90 },
    { code: "7340206_1", name: "Tài chính quốc tế", quota: 40, cutoff2025: 26.30 },
    { code: "73402061F", name: "Tài chính quốc tế - Tiếng Anh toàn phần", quota: 80, cutoff2025: null },
    { code: "7340301_1", name: "Kế toán doanh nghiệp", quota: 510, cutoff2025: 23.40 },
    { code: "73403011F", name: "Kế toán doanh nghiệp - Tiếng Anh toàn phần", quota: 80, cutoff2025: null },
    { code: "7340301_2", name: "Kế toán công", quota: 50, cutoff2025: 24.00 },
    { code: "7340301_3", name: "Kế toán tích hợp chứng chỉ ICAEW", quota: 50, cutoff2025: 23.00 },
    { code: "7340301_4", name: "Kế toán tích hợp chứng chỉ ACCA", quota: 50, cutoff2025: 23.20 },
    { code: "7340302_1", name: "Kiểm toán", quota: 120, cutoff2025: 25.70 },
    { code: "73403021F", name: "Kiểm toán - Tiếng Anh toàn phần", quota: 80, cutoff2025: null },
    { code: "7340403", name: "Quản lý công", quota: 70, cutoff2025: 23.00 },
    { code: "7340404", name: "Quản trị nhân lực", quota: 150, cutoff2025: 24.80 },
    { code: "7340405", name: "Hệ thống thông tin quản lý", quota: 110, cutoff2025: 25.00 },
    { code: "7380101_1", name: "Luật kinh doanh quốc tế", quota: 70, cutoff2025: 24.90 },
    { code: "7380101_2", name: "Luật", quota: 40, cutoff2025: null },
    { code: "7380107", name: "Luật kinh tế", quota: 80, cutoff2025: 24.65 },
    { code: "7380109", name: "Luật thương mại quốc tế", quota: 40, cutoff2025: null },
    { code: "7460108_1", name: "Khoa học dữ liệu", quota: 55, cutoff2025: 26.00 },
    { code: "7460108_2", name: "Phân tích dữ liệu", quota: 40, cutoff2025: 26.40 },
    { code: "7480101", name: "Khoa học máy tính", quota: 50, cutoff2025: 24.00 },
    { code: "7480103", name: "Kỹ thuật phần mềm", quota: 55, cutoff2025: 23.60 },
    { code: "7480107_1", name: "Robot và Trí tuệ nhân tạo (hệ kỹ sư)", quota: 30, cutoff2025: 23.80 },
    { code: "74801071D", name: "Robot và Trí tuệ nhân tạo song bằng", quota: 60, cutoff2025: null },
    { code: "7480107_2", name: "Điều khiển thông minh và tự động hóa", quota: 40, cutoff2025: 23.40 },
    { code: "74801072D", name: "Điều khiển thông minh và tự động hóa song bằng", quota: 30, cutoff2025: null },
    { code: "7480201_1", name: "Công nghệ thông tin", quota: 50, cutoff2025: 24.30 },
    { code: "7480201_2", name: "Công nghệ nghệ thuật", quota: 70, cutoff2025: 24.90 },
    { code: "7480201_3", name: "Công nghệ và đổi mới sáng tạo", quota: 100, cutoff2025: 23.00 },
    { code: "7480202", name: "An toàn thông tin", quota: 50, cutoff2025: 23.80 },
    { code: "7510201", name: "Sản xuất thông minh (hệ kỹ sư)", quota: 40, cutoff2025: null },
    { code: "7510605_1", name: "Logistics và Quản lý chuỗi cung ứng", quota: 40, cutoff2025: 27.70 },
    { code: "75106051F", name: "Logistics và Quản lý chuỗi cung ứng - Tiếng Anh toàn phần", quota: 80, cutoff2025: null },
    { code: "7510605_2", name: "Công nghệ Logistics", quota: 30, cutoff2025: 25.40 },
    { code: "75106052F", name: "Công nghệ Logistics tích hợp FIATA - Tiếng Anh toàn phần", quota: 30, cutoff2025: null },
    { code: "7510605_3", name: "Kỹ sư tài năng Logistics thông minh", quota: 30, cutoff2025: null },
    { code: "7580104SD", name: "Kiến trúc và thiết kế đô thị thông minh song bằng", quota: 80, cutoff2025: 23.00 },
    { code: "7580104_2", name: "Kiến trúc và Thiết kế đô thị thông minh", quota: 40, cutoff2025: null },
    { code: "7620114", name: "Kinh doanh nông nghiệp", quota: 50, cutoff2025: 23.00 },
    { code: "7810103", name: "Quản trị dịch vụ du lịch và lữ hành", quota: 165, cutoff2025: 23.40 },
    { code: "7810201_1", name: "Quản trị khách sạn", quota: 85, cutoff2025: 24.20 },
    { code: "7810201_2", name: "Quản trị sự kiện và dịch vụ giải trí", quota: 80, cutoff2025: 25.50 },
    { code: "7840104", name: "Quản trị vận hành và di chuyển thông minh", quota: 40, cutoff2025: null },
    { code: "ASACoop_1", name: "Chương trình Cử nhân ASIA Co-op", quota: 80, cutoff2025: 24.70, type: "asean" },
    { code: "ISBCNTN_1", name: "Chương trình Cử nhân tài năng ISB - Kinh doanh", quota: 500, cutoff2025: 25.00, type: "talent" },
    { code: "ISBCNTN_2", name: "Chương trình Cử nhân tài năng ISB - Công nghệ (AI trong kinh doanh)", quota: 50, cutoff2025: null, type: "talent" }
  ],
  KSV: [
    { code: "7220201", name: "Tiếng Anh thương mại", quota: 30, cutoff2025: 17.00 },
    { code: "7340201_3", name: "Thuế", quota: 30, cutoff2025: 17.00 },
    { code: "7340122", name: "Thương mại điện tử", quota: 60, cutoff2025: 20.50 },
    { code: "7380107", name: "Luật kinh tế", quota: 40, cutoff2025: 18.50 },
    { code: "7510605", name: "Logistics và Quản lý chuỗi cung ứng", quota: 60, cutoff2025: 22.00 },
    { code: "7480201", name: "Công nghệ và đổi mới sáng tạo", quota: 30, cutoff2025: 18.00 },
    { code: "7480107", name: "Robot và Trí tuệ nhân tạo (hệ kỹ sư)", quota: 30, cutoff2025: 18.00 },
    { code: "7620114", name: "Kinh doanh nông nghiệp", quota: 30, cutoff2025: 17.00 },
    { code: "7810201", name: "Quản trị khách sạn", quota: 30, cutoff2025: 18.00 },
    { code: "7340101", name: "Quản trị", quota: 40, cutoff2025: 18.50 },
    { code: "7340120", name: "Kinh doanh quốc tế", quota: 60, cutoff2025: 19.50 },
    { code: "7340115", name: "Marketing", quota: 70, cutoff2025: 22.00 },
    { code: "7340201_1", name: "Ngân hàng", quota: 40, cutoff2025: 18.00 },
    { code: "7340201_2", name: "Tài chính", quota: 50, cutoff2025: 18.00 },
    { code: "7340301", name: "Kế toán doanh nghiệp", quota: 50, cutoff2025: 17.50 }
  ]
};

const conversionTables2025 = {
  dgnl: [
    { a: 969, b: 1200, c: 26.50, d: 30.00 },
    { a: 945, b: 969, c: 25.25, d: 26.50 },
    { a: 903, b: 945, c: 23.50, d: 25.25 },
    { a: 841, b: 903, c: 21.77, d: 23.50 },
    { a: 786, b: 841, c: 20.80, d: 21.77 },
    { a: 735, b: 786, c: 20.05, d: 20.80 },
    { a: 689, b: 735, c: 19.35, d: 20.05 },
    { a: 643, b: 689, c: 18.70, d: 19.35 },
    { a: 596, b: 643, c: 18.05, d: 18.70 },
    { a: 549, b: 596, c: 17.15, d: 18.05 },
    { a: 491, b: 549, c: 16.05, d: 17.15 },
    { a: 380, b: 491, c: 13.00, d: 16.05 }
  ],
  vsat: [
    { a: 392.50, b: 450.00, c: 25.50, d: 30.00 },
    { a: 383.50, b: 392.50, c: 24.60, d: 25.50 },
    { a: 367.00, b: 383.50, c: 23.75, d: 24.60 },
    { a: 346.00, b: 367.00, c: 22.25, d: 23.75 },
    { a: 328.50, b: 346.00, c: 21.10, d: 22.25 },
    { a: 313.50, b: 328.50, c: 20.25, d: 21.10 },
    { a: 298.00, b: 313.50, c: 19.50, d: 20.25 },
    { a: 282.50, b: 298.00, c: 18.60, d: 19.50 },
    { a: 265.50, b: 282.50, c: 17.75, d: 18.60 },
    { a: 244.50, b: 265.50, c: 16.75, d: 17.75 },
    { a: 218.00, b: 244.50, c: 15.25, d: 16.75 },
    { a: 31.50, b: 218.00, c: 6.25, d: 15.25 }
  ]
};

const $ = id => document.getElementById(id);
const els = {};
[
  "campus", "program", "method", "conversionMode", "combo", "thpt1", "thpt2", "thpt3",
  "dgnlScore", "vsatScore", "gpa10", "gpa11", "gpa12", "bonusMode", "manualBonus", "manualBonusWrap", "autoBonusWrap",
  "ielts", "hsg", "good10", "good11", "good12", "spec10", "spec11", "spec12", "region", "objectPriority", "khkt",
  "totalScore", "examScore", "gpaScore", "baseScore", "bonusScore", "priorityScore", "formulaNote",
  "programName", "cutoffScore", "gapScore", "admissionStatus", "eligibleList", "heroScore", "heroStatus",
  "scrollToCalc", "copyResult", "printPage"
].forEach(id => els[id] = $(id));

function n(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function round2(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function fmt(value) {
  return Number.isFinite(value) ? value.toFixed(2) : "--";
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function to100From30(score30) {
  return round2(score30 * 100 / 30);
}

function interpolate(x, table) {
  for (let i = 0; i < table.length; i++) {
    const r = table[i];
    const isLast = i === table.length - 1;
    if ((x > r.a && x <= r.b) || (isLast && x === r.a)) {
      const y = r.c + ((x - r.a) * (r.d - r.c)) / (r.b - r.a);
      return round2(y);
    }
  }
  return null;
}

function getSubjects() {
  const selected = els.combo.options[els.combo.selectedIndex];
  return selected.dataset.subjects.split(",");
}

function updateSubjectLabels() {
  const [s1, s2, s3] = getSubjects();
  $("thptSubject1").textContent = s1;
  $("thptSubject2").textContent = s2;
  $("thptSubject3").textContent = s3;
}

function selectedProgram() {
  const campus = els.campus.value;
  return programs[campus].find(p => p.code === els.program.value) || programs[campus][0];
}

function populatePrograms() {
  const campus = els.campus.value;
  const current = els.program.value;
  const list = programs[campus] || [];
  const hasCurrent = list.some(p => p.code === current);

  els.program.innerHTML = list.map((p, index) => {
    const selected = hasCurrent ? p.code === current : index === 0;
    const cutoff = p.cutoff2025 == null ? "chưa có điểm 2025" : `điểm 2025: ${p.cutoff2025.toFixed(2)}`;
    return `<option value="${p.code}" ${selected ? "selected" : ""}>${p.code} - ${p.name} (${cutoff})</option>`;
  }).join("");

  syncDropdownState();
}

function syncDropdownState() {
  const campus = els.campus.value;
  const method = els.method.value;
  const vsatOption = els.method.querySelector('option[value="vsat"]');

  if (vsatOption) {
    vsatOption.disabled = campus !== "KSV";
    vsatOption.textContent = campus === "KSV"
      ? "Chỉ dùng V-SAT Cần Thơ (chỉ KSV)"
      : "Chỉ dùng V-SAT Cần Thơ (không áp dụng KSA)";
  }

  if (campus !== "KSV" && method === "vsat") {
    els.method.value = "auto";
  }

  const conversionOnlyForExternal = els.method.value === "thpt";
  els.conversionMode.disabled = conversionOnlyForExternal;
  els.conversionMode.parentElement.classList.toggle("is-disabled", conversionOnlyForExternal);
}

function showRelevantInputs() {
  syncDropdownState();

  const campus = els.campus.value;
  const method = els.method.value;
  const showThpt = method === "auto" || method === "thpt";
  const showDgnl = method === "auto" || method === "dgnl";
  const showVsat = campus === "KSV" && (method === "auto" || method === "vsat");

  $("comboLabel").classList.toggle("hidden", !showThpt);
  $("thptInputs").classList.toggle("hidden", !showThpt);
  $("dgnlInputs").classList.toggle("hidden", !showDgnl);
  $("vsatInputs").classList.toggle("hidden", !showVsat);
  els.manualBonusWrap.classList.toggle("hidden", els.bonusMode.value !== "manual");
  els.autoBonusWrap.classList.toggle("hidden", els.bonusMode.value !== "auto");
}

function calcThptExam100() {
  const values = [n(els.thpt1.value), n(els.thpt2.value), n(els.thpt3.value)];
  if (values.every(v => v === 0)) return null;
  const sum = values.reduce((a, b) => a + b, 0);
  if (sum <= 0 || sum > 30) return null;
  return { source: "Thi tốt nghiệp THPT", score100: round2(sum * 100 / 30), raw: round2(sum), detail: `${round2(sum)}/30` };
}

function convertExternalExam(raw, kind) {
  if (!raw || raw <= 0) return null;
  if (kind === "dgnl") {
    if (els.conversionMode.value === "percent") return round2(raw / 1200 * 100);
    const y30 = interpolate(raw, conversionTables2025.dgnl);
    return y30 == null ? null : to100From30(y30);
  }
  if (kind === "vsat") {
    if (els.conversionMode.value === "percent") return round2(raw / 450 * 100);
    const y30 = interpolate(raw, conversionTables2025.vsat);
    return y30 == null ? null : to100From30(y30);
  }
  return null;
}

function calcExamCandidates() {
  const method = els.method.value;
  const campus = els.campus.value;
  const candidates = [];

  if (method === "auto" || method === "thpt") {
    const thpt = calcThptExam100();
    if (thpt) candidates.push(thpt);
  }

  if (method === "auto" || method === "dgnl") {
    const raw = n(els.dgnlScore.value);
    const score100 = convertExternalExam(raw, "dgnl");
    if (score100 != null) candidates.push({ source: "ĐGNL ĐHQG-HCM", score100, raw, detail: `${raw}/1200` });
  }

  if ((method === "auto" || method === "vsat") && campus === "KSV") {
    const raw = n(els.vsatScore.value);
    const score100 = convertExternalExam(raw, "vsat");
    if (score100 != null) candidates.push({ source: "V-SAT Cần Thơ", score100, raw, detail: `${raw}/450` });
  }

  if (method === "vsat" && campus !== "KSV") return { error: "V-SAT chỉ áp dụng cho cơ sở KSV - UEH Mekong trong mô hình tuyển sinh UEH." };
  if (!candidates.length) return null;

  if (method === "auto") return candidates.sort((a, b) => b.score100 - a.score100)[0];
  return candidates[0];
}

function calcGpa100() {
  const g10 = n(els.gpa10.value);
  const g11 = n(els.gpa11.value);
  const g12 = n(els.gpa12.value);
  if (g10 === 0 && g11 === 0 && g12 === 0) return null;
  const weighted = (g10 * 1 + g11 * 2 + g12 * 3) / 6;
  return round2(weighted * 10);
}

function autoBonus100() {
  // Quy đổi gần đúng từ định mức điểm cộng UEH 2025 thang 30 sang thang 100, sau đó chặn tối đa 10.
  const scale = 100 / 30;
  let bonus30 = 0;
  const ieltsMap = { "6.0": 0.5, "6.5": 1.0, "7.0": 1.5 };
  const hsgMap = { nhat: 0.6, nhi: 0.5, ba: 0.4 };
  bonus30 += ieltsMap[els.ielts.value] || 0;
  bonus30 += hsgMap[els.hsg.value] || 0;
  bonus30 += [els.good10, els.good11, els.good12].filter(el => el.checked).length * 0.1;
  bonus30 += [els.spec10, els.spec11, els.spec12].filter(el => el.checked).length * 0.2;
  return round2(clamp(bonus30 * scale, 0, 10));
}

function calcBonus100() {
  if (els.bonusMode.value === "manual") return round2(clamp(n(els.manualBonus.value), 0, 10));
  return autoBonus100();
}

function calcPriority100(scorePlusBonus) {
  const base30 = n(els.region.value) + n(els.objectPriority.value);
  if (base30 <= 0) return 0;
  const base100 = base30 * 100 / 30;
  if (scorePlusBonus >= 75) {
    return round2(Math.max(0, ((100 - scorePlusBonus) / 25) * base100));
  }
  return round2(base100);
}

function cutoff100(program) {
  if (program.cutoff2025 == null) return null;
  return to100From30(program.cutoff2025);
}

function calculate() {
  const program = selectedProgram();
  const exam = calcExamCandidates();
  const gpa100 = calcGpa100();
  const bonus = calcBonus100();

  if (exam?.error) return renderInvalid(exam.error, program);
  if (!exam || gpa100 == null) return renderInvalid("Chưa đủ dữ liệu: cần nhập ít nhất một điểm thi hợp lệ và ĐTB lớp 10, 11, 12.", program);

  const base = round2(exam.score100 * 0.6 + gpa100 * 0.4);
  const beforePriority = clamp(base + bonus, 0, 100);
  const priority = calcPriority100(beforePriority);
  const total = round2(clamp(beforePriority + priority, 0, 100));

  const modeNote = els.conversionMode.value === "ueh2025"
    ? "Điểm ĐGNL/V-SAT được mô phỏng bằng khung quy đổi tương đương UEH 2025 rồi đưa sang thang 100."
    : "Điểm ĐGNL/V-SAT được quy đổi phần trăm trực tiếp theo thang tối đa."
  const note = `Đang dùng ${exam.source} (${exam.detail}) → ${fmt(exam.score100)}/100. ĐTB THPT quy đổi: ${fmt(gpa100)}/100. Công thức: ${fmt(exam.score100)} × 60% + ${fmt(gpa100)} × 40% + cộng/ưu tiên. ${modeNote}`;

  renderResults({ exam, gpa100, base, bonus, priority, total, note, program });
}

function renderInvalid(message, program) {
  els.examScore.textContent = "--";
  els.gpaScore.textContent = "--";
  els.baseScore.textContent = "--";
  els.bonusScore.textContent = `+${fmt(calcBonus100())}`;
  els.priorityScore.textContent = "+--";
  els.totalScore.textContent = "--";
  els.heroScore.textContent = "0.00";
  els.heroStatus.textContent = "Chưa đủ dữ liệu hợp lệ";
  els.formulaNote.textContent = message;
  renderCompare(null, program);
  els.eligibleList.innerHTML = `<p class="small-note">Nhập đủ điểm thi và ĐTB THPT để xem danh sách ngành phù hợp.</p>`;
}

function renderResults({ exam, gpa100, base, bonus, priority, total, note, program }) {
  els.examScore.textContent = fmt(exam.score100);
  els.gpaScore.textContent = fmt(gpa100);
  els.baseScore.textContent = fmt(base);
  els.bonusScore.textContent = `+${fmt(bonus)}`;
  els.priorityScore.textContent = `+${fmt(priority)}`;
  els.totalScore.textContent = fmt(total);
  els.heroScore.textContent = fmt(total);
  els.formulaNote.textContent = note;
  renderCompare(total, program);
  renderEligible(total);
}

function renderCompare(total, program) {
  els.programName.textContent = `${program.code} - ${program.name} · chỉ tiêu 2026: ${program.quota ?? "--"}`;
  const c100 = cutoff100(program);
  els.cutoffScore.textContent = c100 == null ? "--" : fmt(c100);

  if (total == null || c100 == null) {
    els.gapScore.textContent = "--";
    els.admissionStatus.className = "status-pill";
    els.admissionStatus.textContent = c100 == null ? "Ngành mới/chưa có mốc 2025" : "Chưa đủ dữ liệu";
    return;
  }

  const gap = round2(total - c100);
  els.gapScore.textContent = `${gap >= 0 ? "+" : ""}${fmt(gap)}`;
  let className = "status-pill ";
  let text = "";
  if (gap >= 3) {
    className += "ok";
    text = "Vượt mốc 2025 quy đổi khá tốt";
  } else if (gap >= 0) {
    className += "risk";
    text = "Sát/vừa vượt mốc 2025 quy đổi";
  } else {
    className += "no";
    text = "Thấp hơn mốc 2025 quy đổi";
  }
  els.admissionStatus.className = className;
  els.admissionStatus.textContent = text;
  els.heroStatus.textContent = text;
}

function renderEligible(total) {
  const campus = els.campus.value;
  const list = programs[campus]
    .map(p => ({ ...p, ref100: cutoff100(p) }))
    .filter(p => p.ref100 != null && p.ref100 <= total)
    .sort((a, b) => b.ref100 - a.ref100)
    .slice(0, 16);

  if (!list.length) {
    els.eligibleList.innerHTML = `<p class="small-note">Chưa có ngành nào ở ${campus} có mốc 2025 quy đổi thấp hơn hoặc bằng điểm hiện tại.</p>`;
    return;
  }

  els.eligibleList.innerHTML = list.map(p => {
    const diff = round2(total - p.ref100);
    return `
      <div class="program-item">
        <strong>${p.code} - ${p.name}</strong>
        <span>2025 quy đổi: ${fmt(p.ref100)}/100 · Chỉ tiêu 2026: ${p.quota ?? "--"}</span>
        <span>+${fmt(diff)}</span>
      </div>
    `;
  }).join("");
}

function copySummary() {
  const program = selectedProgram();
  const c100 = cutoff100(program);
  const text = [
    "KẾT QUẢ TÍNH ĐIỂM UEH 2026 ƯỚC TÍNH",
    `Cơ sở: ${els.campus.value}`,
    `Ngành: ${program.code} - ${program.name}`,
    `Cách lấy điểm thi: ${els.method.options[els.method.selectedIndex].text}`,
    `Điểm thi quy đổi: ${els.examScore.textContent}`,
    `ĐTB THPT quy đổi: ${els.gpaScore.textContent}`,
    `Điểm nền 60/40: ${els.baseScore.textContent}`,
    `Điểm cộng: ${els.bonusScore.textContent}`,
    `Điểm ưu tiên: ${els.priorityScore.textContent}`,
    `Tổng điểm xét tuyển ước tính: ${els.totalScore.textContent}`,
    `Mốc 2025 quy đổi /100: ${c100 == null ? "Chưa có" : fmt(c100)}`,
    `Chênh lệch: ${els.gapScore.textContent}`
  ].join("\n");
  navigator.clipboard?.writeText(text).then(() => {
    els.copyResult.textContent = "Đã sao chép";
    setTimeout(() => els.copyResult.textContent = "Sao chép", 1400);
  });
}


function attachEvents() {
  document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("input", calculate);
    el.addEventListener("change", () => {
      if (el === els.campus) populatePrograms();
      if (el === els.combo) updateSubjectLabels();
      if (el === els.campus || el === els.method || el === els.bonusMode) showRelevantInputs();
      calculate();
    });
  });

  els.scrollToCalc.addEventListener("click", () => document.getElementById("calculator").scrollIntoView({ behavior: "smooth" }));
  els.copyResult.addEventListener("click", copySummary);
  els.printPage.addEventListener("click", () => window.print());
}

function init() {
  populatePrograms();
  updateSubjectLabels();
  showRelevantInputs();
  attachEvents();
  calculate();
}

init();
