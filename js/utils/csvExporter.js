// js/utils/csvExporter.js

function escapeCsv(value) {
  const stringValue = String(value ?? "");
  if (
    stringValue.includes(",") ||
    stringValue.includes('"') ||
    stringValue.includes("\n")
  ) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

export function exportResultsToCsv(results = []) {
  if (!Array.isArray(results) || results.length === 0) {
    alert("내보낼 데이터가 없습니다.");
    return;
  }

  const headers = [
    "고유번호",
    "이름",
    "나이",
    "성별",
    "검사 날짜",
    "총점",
    "총문항수",
    "AADL 시지각",
    "AADL 지남력",
    "AADL 계산력",
    "AADL 기억력",
    "AADL 실행력",
    "IADL 시지각",
    "IADL 지남력",
    "IADL 계산력",
    "IADL 기억력",
    "IADL 실행력"
  ];

  const rows = results.map((item) => [
    item.id,
    item.name,
    item.age,
    item.gender,
    item.date,
    item.score,
    item.total,
    item.aadlScores?.[1] ?? 0,
    item.aadlScores?.[2] ?? 0,
    item.aadlScores?.[3] ?? 0,
    item.aadlScores?.[4] ?? 0,
    item.aadlScores?.[5] ?? 0,
    item.iadlScores?.[1] ?? 0,
    item.iadlScores?.[2] ?? 0,
    item.iadlScores?.[3] ?? 0,
    item.iadlScores?.[4] ?? 0,
    item.iadlScores?.[5] ?? 0
  ]);

  const csvContent = [
    headers.map(escapeCsv).join(","),
    ...rows.map((row) => row.map(escapeCsv).join(","))
  ].join("\n");

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cognitive_results.csv";
  link.click();
  URL.revokeObjectURL(url);
}