"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Headphones,
  Mic2,
  PhoneCall,
  Play,
  RefreshCw,
  Send,
  Sparkles,
  Square,
  Target,
  Trophy,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const scenarios = [
  {
    title: "Distribuidor con pedidos por WhatsApp",
    contact: "Dueño de un distribuidor mayorista",
    context: "Recibe pedidos por WhatsApp, los copia a una planilla y luego los carga en su sistema.",
    objective: "Detectar cuánto trabajo manual existe y conseguir una demostración.",
  },
  {
    title: "Fábrica con vendedores externos",
    contact: "Responsable comercial de una fábrica",
    context: "Los vendedores toman pedidos y envían listas de precios distintas a cada cliente.",
    objective: "Mostrar el valor de centralizar precios, clientes, vendedores y pedidos.",
  },
  {
    title: "Mayorista que ya tiene una web",
    contact: "Gerente de ventas de un mayorista",
    context: "Tiene una web institucional, pero los clientes todavía hacen los pedidos por mensaje.",
    objective: "Diferenciar una web tradicional de un canal de ventas mayoristas B2B.",
  },
  {
    title: "Empresa con catálogo desactualizado",
    contact: "Encargado de administración comercial",
    context: "Cada cambio de precio o stock obliga a reenviar catálogos y listas.",
    objective: "Descubrir el costo del desorden y proponer una demostración breve.",
  },
];

const objections = [
  {
    objection: "Ya trabajamos bien por WhatsApp.",
    direction: "No discutas. Validá y preguntá qué ocurre después de recibir el pedido.",
    example: "Perfecto, WhatsApp puede seguir siendo un canal de contacto. ¿Después esos pedidos tienen que cargarlos u organizarlos manualmente en otro sistema?",
  },
  {
    objection: "Ya tenemos una página web.",
    direction: "Diferenciá presencia institucional de operación mayorista.",
    example: "Buenísimo. ¿Esa página permite que cada cliente ingrese, vea sus precios y condiciones particulares y haga el pedido mayorista directamente?",
  },
  {
    objection: "Ahora no tenemos tiempo.",
    direction: "Reducí el compromiso y buscá un próximo paso concreto.",
    example: "Lo entiendo. No hace falta verlo ahora: coordinemos una demostración breve para el día que les resulte cómodo y ahí deciden si tiene sentido continuar.",
  },
  {
    objection: "No queremos cambiar nuestro sistema.",
    direction: "Aclarar que primero se analiza la operación y las integraciones.",
    example: "No buscamos que cambien algo que ya funciona. Primero vemos cómo trabajan hoy y si VentasXMayor puede ordenar el canal de pedidos o integrarse con su operación.",
  },
  {
    objection: "Mandame información.",
    direction: "Aceptá, pero calificá antes de cortar la conversación.",
    example: "Claro. Para enviarte algo realmente útil: ¿hoy reciben la mayoría de los pedidos por WhatsApp, vendedores o una plataforma propia?",
  },
  {
    objection: "No soy la persona que decide.",
    direction: "Pedí orientación sin presionar.",
    example: "Perfecto, ¿quién coordina las ventas mayoristas o la forma en que reciben y organizan los pedidos?",
  },
];

const emptyProgress = {
  callAttempts: 0,
  objectionAttempts: 0,
  audioSubmissions: 0,
  bestScore: 0,
  lastScore: 0,
};

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function randomIndex(length, current) {
  if (length <= 1) return 0;
  let next = current;
  while (next === current) next = Math.floor(Math.random() * length);
  return next;
}

export default function PracticeClient({ profile }) {
  const supabase = useMemo(() => createClient(), []);
  const legacyProgressKey = `marevalux-practice-progress-${profile.id}`;

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [callRunning, setCallRunning] = useState(false);
  const [callSeconds, setCallSeconds] = useState(0);
  const [callChecks, setCallChecks] = useState({ opening: false, diagnosis: false, value: false, nextStep: false });
  const [callScore, setCallScore] = useState(0);

  const [objectionIndex, setObjectionIndex] = useState(0);
  const [objectionAnswer, setObjectionAnswer] = useState("");
  const [showGuide, setShowGuide] = useState(false);
  const [objectionChecks, setObjectionChecks] = useState({ validate: false, question: false, clarity: false, nextStep: false });
  const [objectionScore, setObjectionScore] = useState(0);

  const [progress, setProgress] = useState(emptyProgress);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);

  const [recording, setRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [draftSubmission, setDraftSubmission] = useState(null);
  const [savingDraft, setSavingDraft] = useState(false);
  const [notes, setNotes] = useState("");
  const [exerciseType, setExerciseType] = useState("llamada");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const mediaRecorderRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const chunksRef = useRef([]);
  const recordingStartedAtRef = useRef(0);
  const objectAudioUrlRef = useRef("");
  const restoredDraftRef = useRef(false);

  function clearObjectAudioUrl() {
    if (objectAudioUrlRef.current) {
      URL.revokeObjectURL(objectAudioUrlRef.current);
      objectAudioUrlRef.current = "";
    }
  }

  function showLocalAudio(blob) {
    clearObjectAudioUrl();
    const nextUrl = URL.createObjectURL(blob);
    objectAudioUrlRef.current = nextUrl;
    setAudioUrl(nextUrl);
    return nextUrl;
  }

  useEffect(() => {
    if (!callRunning) return undefined;
    const timer = window.setInterval(() => setCallSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [callRunning]);

  useEffect(() => {
    if (!recording) return undefined;
    const timer = window.setInterval(() => setRecordSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [recording]);

  useEffect(() => {
    return () => {
      clearObjectAudioUrl();
      mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  function progressFromRow(row) {
    if (!row) return null;
    return {
      callAttempts: Number(row.call_attempts || 0),
      objectionAttempts: Number(row.objection_attempts || 0),
      audioSubmissions: Number(row.audio_submissions || 0),
      bestScore: Number(row.best_score || 0),
      lastScore: Number(row.last_score || 0),
    };
  }

  function progressPayload(value) {
    return {
      user_id: profile.id,
      call_attempts: Number(value.callAttempts || 0),
      objection_attempts: Number(value.objectionAttempts || 0),
      audio_submissions: Number(value.audioSubmissions || 0),
      best_score: Number(value.bestScore || 0),
      last_score: Number(value.lastScore || 0),
      updated_at: new Date().toISOString(),
    };
  }

  async function persistProgress(nextProgress, showError = true) {
    setProgress(nextProgress);
    try {
      window.localStorage.setItem(legacyProgressKey, JSON.stringify(nextProgress));
    } catch {
      // Supabase continúa siendo la fuente principal aunque localStorage no esté disponible.
    }

    const { error } = await supabase
      .from("practice_progress")
      .upsert(progressPayload(nextProgress), { onConflict: "user_id" });

    if (error && showError) {
      setMessage({
        type: "error",
        text: "El resultado quedó visible en este navegador, pero no pudo sincronizarse con Supabase. Ejecutá el SQL de persistencia antes de continuar.",
      });
    }
    return !error;
  }

  async function loadProgress() {
    let legacy = null;
    try {
      legacy = JSON.parse(window.localStorage.getItem(legacyProgressKey) || "null");
    } catch {
      legacy = null;
    }

    const { data, error } = await supabase
      .from("practice_progress")
      .select("call_attempts, objection_attempts, audio_submissions, best_score, last_score")
      .eq("user_id", profile.id)
      .maybeSingle();

    const databaseProgress = progressFromRow(data) || emptyProgress;
    const legacyProgress = legacy ? { ...emptyProgress, ...legacy } : emptyProgress;
    const merged = {
      callAttempts: Math.max(databaseProgress.callAttempts, Number(legacyProgress.callAttempts || 0)),
      objectionAttempts: Math.max(databaseProgress.objectionAttempts, Number(legacyProgress.objectionAttempts || 0)),
      audioSubmissions: Math.max(databaseProgress.audioSubmissions, Number(legacyProgress.audioSubmissions || 0)),
      bestScore: Math.max(databaseProgress.bestScore, Number(legacyProgress.bestScore || 0)),
      lastScore: databaseProgress.lastScore || Number(legacyProgress.lastScore || 0),
    };

    setProgress(merged);
    setProgressLoaded(true);

    if (!error) {
      await persistProgress(merged, false);
    } else if (error.code !== "PGRST116") {
      setMessage({
        type: "error",
        text: "No se pudo cargar el progreso desde Supabase. Ejecutá el nuevo SQL de persistencia para evitar pérdidas al recargar.",
      });
    }
  }

  async function loadSubmissions(restoreLatestDraft = true) {
    setLoadingSubmissions(true);
    const { data, error } = await supabase
      .from("practice_submissions")
      .select("id, exercise_type, score, duration_seconds, notes, audio_path, status, created_at, updated_at")
      .eq("user_id", profile.id)
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) {
      setLoadingSubmissions(false);
      return;
    }

    const rows = data || [];
    const paths = rows.map((item) => item.audio_path).filter(Boolean);
    let signedByPath = new Map();

    if (paths.length) {
      const { data: signedData } = await supabase.storage
        .from("practice-audios")
        .createSignedUrls(paths, 60 * 60);
      signedByPath = new Map(
        (signedData || [])
          .filter((item) => item?.path && item?.signedUrl)
          .map((item) => [item.path, item.signedUrl]),
      );
    }

    const enriched = rows.map((item) => ({
      ...item,
      status: item.status || "submitted",
      audio_url: signedByPath.get(item.audio_path) || "",
    }));
    setSubmissions(enriched);

    const submittedCount = enriched.filter((item) => item.status === "submitted").length;
    setProgress((current) => ({
      ...current,
      audioSubmissions: Math.max(current.audioSubmissions, submittedCount),
    }));

    if (restoreLatestDraft && !restoredDraftRef.current) {
      restoredDraftRef.current = true;
      const latestDraft = enriched.find((item) => item.status === "draft" && item.audio_url);
      if (latestDraft) {
        clearObjectAudioUrl();
        setDraftSubmission(latestDraft);
        setAudioBlob(null);
        setAudioUrl(latestDraft.audio_url);
        setRecordSeconds(Number(latestDraft.duration_seconds || 0));
        setNotes(latestDraft.notes || "");
        setExerciseType(latestDraft.exercise_type || "llamada");
        setMessage({ type: "info", text: "Recuperamos automáticamente la última grabación que todavía no habías entregado." });
      }
    }

    setLoadingSubmissions(false);
  }

  useEffect(() => {
    async function initializePractice() {
      await loadProgress();
      await loadSubmissions(true);
    }
    initializePractice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function resetCall(nextScenario = false) {
    setCallRunning(false);
    setCallSeconds(0);
    setCallScore(0);
    setCallChecks({ opening: false, diagnosis: false, value: false, nextStep: false });
    if (nextScenario) setScenarioIndex((current) => randomIndex(scenarios.length, current));
  }

  async function finishCall() {
    if (!callRunning && callSeconds === 0) return;
    setCallRunning(false);
    const completed = Object.values(callChecks).filter(Boolean).length;
    const timePoints = callSeconds >= 45 && callSeconds <= 180 ? 28 : callSeconds >= 25 ? 18 : 8;
    const score = Math.min(100, completed * 18 + timePoints);
    setCallScore(score);
    const nextProgress = {
      ...progress,
      callAttempts: progress.callAttempts + 1,
      lastScore: score,
      bestScore: Math.max(progress.bestScore, score),
    };
    await persistProgress(nextProgress);
  }

  async function evaluateObjection() {
    const completed = Object.values(objectionChecks).filter(Boolean).length;
    const lengthPoints = objectionAnswer.trim().length >= 80 ? 24 : objectionAnswer.trim().length >= 35 ? 14 : 5;
    const score = Math.min(100, completed * 19 + lengthPoints);
    setObjectionScore(score);
    setShowGuide(true);
    const nextProgress = {
      ...progress,
      objectionAttempts: progress.objectionAttempts + 1,
      lastScore: score,
      bestScore: Math.max(progress.bestScore, score),
    };
    await persistProgress(nextProgress);
  }

  function nextObjection() {
    setObjectionIndex((current) => randomIndex(objections.length, current));
    setObjectionAnswer("");
    setShowGuide(false);
    setObjectionScore(0);
    setObjectionChecks({ validate: false, question: false, clarity: false, nextStep: false });
  }

  async function saveRecordingDraft(blob, duration, localUrl) {
    setSavingDraft(true);
    setMessage({ type: "info", text: "Guardando la grabación automáticamente..." });

    const extension = blob.type.includes("ogg") ? "ogg" : "webm";
    const uniqueId = typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const filePath = `${profile.id}/draft-${Date.now()}-${uniqueId}.${extension}`;
    const score = exerciseType === "llamada"
      ? callScore || progress.lastScore
      : objectionScore || progress.lastScore;

    const { error: uploadError } = await supabase.storage
      .from("practice-audios")
      .upload(filePath, blob, {
        contentType: extension === "ogg" ? "audio/ogg" : "audio/webm",
        upsert: false,
      });

    if (uploadError) {
      setSavingDraft(false);
      setMessage({
        type: "error",
        text: "La grabación puede escucharse ahora, pero no se guardó en Supabase. No recargues la página y ejecutá el SQL de persistencia.",
      });
      return;
    }

    const { data: inserted, error: insertError } = await supabase
      .from("practice_submissions")
      .insert({
        user_id: profile.id,
        exercise_type: exerciseType,
        score: Number(score || 0),
        duration_seconds: duration,
        notes: notes.trim() || null,
        audio_path: filePath,
        status: "draft",
        updated_at: new Date().toISOString(),
      })
      .select("id, exercise_type, score, duration_seconds, notes, audio_path, status, created_at, updated_at")
      .single();

    if (insertError) {
      await supabase.storage.from("practice-audios").remove([filePath]);
      setSavingDraft(false);
      setMessage({
        type: "error",
        text: "La grabación puede escucharse ahora, pero no se pudo registrar como borrador. No recargues y revisá el SQL de Supabase.",
      });
      return;
    }

    const draft = { ...inserted, audio_url: localUrl };
    setDraftSubmission(draft);
    setSubmissions((current) => [draft, ...current.filter((item) => item.id !== draft.id)]);
    setSavingDraft(false);
    setMessage({
      type: "success",
      text: "Grabación guardada automáticamente. Podés recargar la página sin perderla.",
    });
  }

  async function startRecording() {
    setMessage({ type: "", text: "" });
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setMessage({ type: "error", text: "Este navegador no permite grabar audio. Probá con Chrome o Edge actualizado." });
      return;
    }

    try {
      clearObjectAudioUrl();
      setAudioBlob(null);
      setAudioUrl("");
      setDraftSubmission(null);
      setRecordSeconds(0);
      chunksRef.current = [];

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      const preferredType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/ogg;codecs=opus")
          ? "audio/ogg;codecs=opus"
          : "";
      const recorder = preferredType
        ? new MediaRecorder(stream, { mimeType: preferredType })
        : new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      recordingStartedAtRef.current = Date.now();

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };

      recorder.onstop = async () => {
        const type = recorder.mimeType || "audio/webm";
        const blob = new Blob(chunksRef.current, { type });
        const duration = Math.max(1, Math.round((Date.now() - recordingStartedAtRef.current) / 1000));
        setRecordSeconds(duration);
        setAudioBlob(blob);
        const localUrl = showLocalAudio(blob);
        mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
        await saveRecordingDraft(blob, duration, localUrl);
      };

      recorder.start();
      setRecording(true);
    } catch {
      setMessage({ type: "error", text: "No se pudo acceder al micrófono. Revisá el permiso del navegador e intentá nuevamente." });
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
    setRecording(false);
  }

  async function submitAudio() {
    if (!audioBlob && !draftSubmission) {
      setMessage({ type: "error", text: "Primero grabá un audio para poder entregarlo." });
      return;
    }

    if (savingDraft) {
      setMessage({ type: "info", text: "Esperá unos segundos mientras terminamos de guardar la grabación." });
      return;
    }

    setSending(true);
    setMessage({ type: "", text: "" });
    const score = exerciseType === "llamada"
      ? callScore || progress.lastScore
      : objectionScore || progress.lastScore;

    let submissionId = draftSubmission?.id || null;
    let filePath = draftSubmission?.audio_path || null;

    if (!submissionId && audioBlob) {
      const extension = audioBlob.type.includes("ogg") ? "ogg" : "webm";
      const uniqueId = typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      filePath = `${profile.id}/${Date.now()}-${uniqueId}.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from("practice-audios")
        .upload(filePath, audioBlob, {
          contentType: extension === "ogg" ? "audio/ogg" : "audio/webm",
          upsert: false,
        });

      if (uploadError) {
        setSending(false);
        setMessage({ type: "error", text: "No se pudo entregar el audio. Revisá la configuración de Supabase." });
        return;
      }

      const { data: inserted, error: insertError } = await supabase
        .from("practice_submissions")
        .insert({
          user_id: profile.id,
          exercise_type: exerciseType,
          score: Number(score || 0),
          duration_seconds: recordSeconds,
          notes: notes.trim() || null,
          audio_path: filePath,
          status: "submitted",
          updated_at: new Date().toISOString(),
        })
        .select("id")
        .single();

      if (insertError) {
        await supabase.storage.from("practice-audios").remove([filePath]);
        setSending(false);
        setMessage({ type: "error", text: "El audio se subió, pero no pudo registrarse la entrega." });
        return;
      }
      submissionId = inserted.id;
    } else {
      const { error: updateError } = await supabase
        .from("practice_submissions")
        .update({
          exercise_type: exerciseType,
          score: Number(score || 0),
          duration_seconds: recordSeconds,
          notes: notes.trim() || null,
          status: "submitted",
          updated_at: new Date().toISOString(),
        })
        .eq("id", submissionId)
        .eq("user_id", profile.id);

      if (updateError) {
        setSending(false);
        setMessage({ type: "error", text: "La grabación sigue guardada como borrador, pero no pudo marcarse como entregada." });
        return;
      }
    }

    const nextProgress = {
      ...progress,
      audioSubmissions: progress.audioSubmissions + 1,
      bestScore: Math.max(progress.bestScore, Number(score || 0)),
      lastScore: Number(score || progress.lastScore || 0),
    };
    await persistProgress(nextProgress, false);

    setMessage({ type: "success", text: "Audio entregado correctamente. Quedó guardado en Supabase y seguirá disponible después de recargar." });
    setNotes("");
    setAudioBlob(null);
    setDraftSubmission(null);
    clearObjectAudioUrl();
    setAudioUrl("");
    setRecordSeconds(0);
    await loadSubmissions(false);
    setSending(false);
  }

  const submittedSubmissions = submissions.filter((item) => item.status === "submitted");
  const averageScore = submittedSubmissions.length
    ? Math.round(submittedSubmissions.reduce((sum, item) => sum + Number(item.score || 0), 0) / submittedSubmissions.length)
    : progress.lastScore;

  const progressGoals = [
    { label: "Realizar 3 simulaciones", current: progress.callAttempts, target: 3 },
    { label: "Resolver 5 objeciones", current: progress.objectionAttempts, target: 5 },
    { label: "Entregar 1 audio", current: Math.max(progress.audioSubmissions, submittedSubmissions.length), target: 1 },
    { label: "Alcanzar 70 puntos", current: Math.max(progress.bestScore, averageScore), target: 70 },
  ];
  const totalProgress = Math.round(
    progressGoals.reduce((sum, goal) => sum + Math.min(1, goal.current / goal.target), 0) / progressGoals.length * 100,
  );

  const currentScenario = scenarios[scenarioIndex];
  const currentObjection = objections[objectionIndex];
  const audioExtension = audioBlob?.type.includes("ogg")
    ? "ogg"
    : draftSubmission?.audio_path?.split(".").pop() || "webm";

  return (
    <div className="mx-auto max-w-[1120px]">
      <div className="grid gap-5 lg:grid-cols-[1fr_310px]">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-[#0896a5] uppercase">Zona práctica · VentasXMayor</p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-[1] font-semibold tracking-[-0.055em] text-[#071a2f]">Entrená antes de hablar con un cliente real.</h1>
          <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-600">Practicá conversaciones de un minuto, respondé objeciones, entregá tu audio y seguí tu evolución desde el mismo panel.</p>
        </div>
        <div className="rounded-[24px] bg-[#071a2f] p-6 text-white shadow-[0_18px_50px_rgba(7,26,47,.15)]">
          <div className="flex items-center justify-between"><span className="text-sm font-semibold">Progreso general</span><Trophy size={20} className="text-cyan-300" /></div>
          <p className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{totalProgress}%</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#18b8c6] transition-all" style={{ width: `${totalProgress}%` }} /></div>
          <p className="mt-4 text-xs leading-5 text-slate-400">{progressLoaded ? <>Mejor puntaje: <strong className="text-white">{progress.bestScore}/100</strong></> : "Cargando progreso guardado..."}</p>
        </div>
      </div>

      <div className="mt-9 grid gap-6 xl:grid-cols-2">
        <section id="simulador" className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f8fa] text-[#0896a5]"><PhoneCall size={24} /></div><p className="mt-5 text-xs font-bold tracking-[0.14em] text-[#0896a5] uppercase">Simulador de llamadas</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Conversación de un minuto</h2></div>
            <button type="button" onClick={() => resetCall(true)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-cyan-200 hover:text-[#0896a5]" aria-label="Cambiar escenario"><RefreshCw size={17} /></button>
          </div>

          <div className="mt-6 rounded-2xl bg-[#071a2f] p-5 text-white">
            <p className="text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Escenario</p>
            <h3 className="mt-2 text-lg font-semibold">{currentScenario.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300"><strong className="text-white">Hablás con:</strong> {currentScenario.contact}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300"><strong className="text-white">Situación:</strong> {currentScenario.context}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300"><strong className="text-white">Objetivo:</strong> {currentScenario.objective}</p>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <div><p className="text-xs font-semibold text-slate-500">Tiempo de llamada</p><p className="mt-1 font-mono text-2xl font-semibold text-[#071a2f]">{formatTime(callSeconds)}</p></div>
            {!callRunning ? <button type="button" onClick={() => setCallRunning(true)} className="flex items-center gap-2 rounded-xl bg-[#18b8c6] px-4 py-3 text-sm font-bold text-[#071a2f]"><Play size={17} />Comenzar</button> : <button type="button" onClick={finishCall} className="flex items-center gap-2 rounded-xl bg-[#071a2f] px-4 py-3 text-sm font-bold text-white"><Square size={15} />Finalizar</button>}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["opening", "Apertura clara"],
              ["diagnosis", "Preguntas de diagnóstico"],
              ["value", "Valor sin explicación excesiva"],
              ["nextStep", "Próximo paso concreto"],
            ].map(([key, label]) => (
              <label key={key} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600">
                <input type="checkbox" checked={callChecks[key]} onChange={(event) => setCallChecks((current) => ({ ...current, [key]: event.target.checked }))} className="h-4 w-4 accent-[#18b8c6]" />{label}
              </label>
            ))}
          </div>

          {callScore > 0 && <div className="mt-5 flex items-center justify-between rounded-2xl bg-cyan-50 px-5 py-4"><div><p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Resultado</p><p className="mt-1 text-sm text-slate-600">Repetí el ejercicio buscando superar tu marca.</p></div><span className="text-3xl font-semibold text-[#071a2f]">{callScore}</span></div>}
        </section>

        <section id="objeciones" className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600"><Sparkles size={24} /></div><p className="mt-5 text-xs font-bold tracking-[0.14em] text-amber-600 uppercase">Entrenamiento de objeciones</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Respondé sin improvisar</h2></div>
            <button type="button" onClick={nextObjection} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-amber-200 hover:text-amber-600" aria-label="Cambiar objeción"><RefreshCw size={17} /></button>
          </div>

          <blockquote className="mt-6 rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-5 text-xl font-semibold leading-8 text-[#071a2f]">“{currentObjection.objection}”</blockquote>
          <label className="mt-5 block"><span className="text-sm font-semibold text-slate-700">Escribí cómo responderías</span><textarea value={objectionAnswer} onChange={(event) => setObjectionAnswer(event.target.value)} rows={5} placeholder="Validá, hacé una pregunta y proponé el próximo paso..." className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-[#071a2f] outline-none transition focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100" /></label>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ["validate", "Validé sin discutir"],
              ["question", "Hice una pregunta"],
              ["clarity", "Respondí con claridad"],
              ["nextStep", "Propuse un próximo paso"],
            ].map(([key, label]) => (
              <label key={key} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600"><input type="checkbox" checked={objectionChecks[key]} onChange={(event) => setObjectionChecks((current) => ({ ...current, [key]: event.target.checked }))} className="h-4 w-4 accent-amber-500" />{label}</label>
            ))}
          </div>
          <button type="button" onClick={evaluateObjection} disabled={!objectionAnswer.trim()} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f] disabled:cursor-not-allowed disabled:opacity-40">Evaluar respuesta<ArrowRight size={17} /></button>

          {showGuide && <div className="mt-5 rounded-2xl bg-slate-50 p-5"><div className="flex items-center justify-between"><p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Guía de mejora</p><span className="text-2xl font-semibold text-[#071a2f]">{objectionScore}</span></div><p className="mt-3 text-sm leading-6 text-slate-600">{currentObjection.direction}</p><p className="mt-3 rounded-xl bg-white px-4 py-3 text-sm leading-6 text-slate-700"><strong>Ejemplo:</strong> {currentObjection.example}</p></div>}
        </section>
      </div>

      <section id="audio" className="mt-6 rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-7 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600"><Mic2 size={24} /></div>
            <p className="mt-5 text-xs font-bold tracking-[0.14em] text-violet-600 uppercase">Grabación y entrega</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Presentación comercial en audio</h2>
            <p className="mt-3 max-w-[670px] text-sm leading-6 text-slate-600">Grabá una conversación de aproximadamente un minuto como si hablaras con el dueño de un mayorista, distribuidor o fábrica. Escuchala y entregala cuando estés conforme.</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {!recording ? <button type="button" onClick={startRecording} className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white"><Mic2 size={18} />Comenzar grabación</button> : <button type="button" onClick={stopRecording} className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white"><Square size={18} />Detener</button>}
              <span className={`rounded-xl px-4 py-3 font-mono text-sm font-semibold ${recording ? "bg-red-50 text-red-700" : "bg-slate-100 text-slate-600"}`}>{recording ? "Grabando " : "Duración "}{formatTime(recordSeconds)}</span>
            </div>

            {audioUrl && <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50 p-5"><div className="flex items-center gap-3"><Headphones size={20} className="text-violet-600" /><div><p className="text-sm font-semibold text-[#071a2f]">Escuchá tu grabación antes de entregarla</p><p className="mt-1 text-xs text-violet-700">{savingDraft ? "Guardando automáticamente en Supabase..." : draftSubmission ? "Borrador protegido contra recargas" : "Grabación disponible en esta sesión"}</p></div></div><audio controls src={audioUrl} className="mt-4 w-full" /><a href={audioUrl} download={`practica-${profile.full_name.replaceAll(" ", "-").toLowerCase()}.${audioExtension}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-700"><Download size={17} />Descargar copia</a></div>}
          </div>

          <div className="rounded-[22px] bg-[#f7f9fa] p-5 sm:p-6">
            <label className="block"><span className="text-sm font-semibold text-slate-700">Tipo de ejercicio</span><select value={exerciseType} onChange={(event) => setExerciseType(event.target.value)} className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#18b8c6]"><option value="llamada">Simulación de llamada</option><option value="objeciones">Respuesta a objeciones</option></select></label>
            <label className="mt-4 block"><span className="text-sm font-semibold text-slate-700">Comentario opcional</span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={4} placeholder="Qué querés mejorar o qué parte te costó..." className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none focus:border-[#18b8c6]" /></label>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-white px-4 py-3"><span className="text-sm text-slate-500">Puntaje asociado</span><strong className="text-[#071a2f]">{exerciseType === "llamada" ? callScore || progress.lastScore : objectionScore || progress.lastScore}/100</strong></div>
            <button type="button" onClick={submitAudio} disabled={(!audioBlob && !draftSubmission) || sending || savingDraft} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f] disabled:cursor-not-allowed disabled:opacity-40"><Send size={17} />{sending ? "Entregando..." : savingDraft ? "Guardando borrador..." : "Entregar audio"}</button>
            {message.text && <p className={`mt-4 rounded-xl px-4 py-3 text-sm leading-5 ${message.type === "success" ? "bg-emerald-50 text-emerald-700" : message.type === "info" ? "bg-cyan-50 text-cyan-800" : "bg-red-50 text-red-700"}`}>{message.text}</p>}
          </div>
        </div>
      </section>

      <section id="progreso" className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-[#0896a5]"><Target size={22} /></div><div><p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Puntajes y progreso</p><h2 className="mt-1 text-xl font-semibold text-[#071a2f]">Objetivos de práctica</h2></div></div>
          <div className="mt-6 space-y-5">
            {progressGoals.map((goal) => {
              const percent = Math.min(100, Math.round(goal.current / goal.target * 100));
              return <div key={goal.label}><div className="flex items-center justify-between gap-4 text-sm"><span className="font-medium text-slate-600">{goal.label}</span><span className="font-bold text-[#071a2f]">{Math.min(goal.current, goal.target)}/{goal.target}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-[#18b8c6]" style={{ width: `${percent}%` }} /></div></div>;
            })}
          </div>
        </div>

        <div className="rounded-[26px] border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold tracking-[0.12em] text-slate-400 uppercase">Historial</p><h2 className="mt-1 text-xl font-semibold text-[#071a2f]">Grabaciones guardadas</h2></div><span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">Promedio {averageScore}/100</span></div>
          <div className="mt-5 space-y-3">
            {loadingSubmissions ? <p className="text-sm text-slate-500">Cargando grabaciones...</p> : submissions.length === 0 ? <div className="rounded-2xl bg-slate-50 px-5 py-6 text-center"><Mic2 size={23} className="mx-auto text-slate-400" /><p className="mt-3 text-sm text-slate-500">Todavía no hay grabaciones guardadas.</p></div> : submissions.slice(0, 6).map((item) => <div key={item.id} className="rounded-xl border border-slate-200 px-4 py-3"><div className="flex items-start justify-between gap-4"><div><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-semibold text-[#071a2f]">{item.exercise_type === "objeciones" ? "Respuesta a objeciones" : "Simulación de llamada"}</p><span className={`rounded-full px-2 py-0.5 text-[0.65rem] font-bold ${item.status === "draft" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>{item.status === "draft" ? "Borrador" : "Entregado"}</span></div><p className="mt-1 text-xs text-slate-500">{new Intl.DateTimeFormat("es-AR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(item.created_at))} · {formatTime(item.duration_seconds || 0)}</p></div><span className="text-lg font-semibold text-[#0896a5]">{item.score}</span></div>{item.audio_url && <audio controls preload="none" src={item.audio_url} className="mt-3 w-full" />}</div>)}
          </div>
        </div>
      </section>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-200 bg-[#e9f8fa] px-5 py-4 text-sm leading-6 text-slate-700"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#0896a5]" /><p>La meta no es memorizar un discurso. Es aprender a escuchar, diagnosticar y conducir la conversación hacia un próximo paso claro.</p></div>
    </div>
  );
}
