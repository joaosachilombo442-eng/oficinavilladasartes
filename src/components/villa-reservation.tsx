import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { reservationMessage, validateReservation, whatsappUrl, type Reservation } from '@/lib/villa-content';

export function VillaReservation() {
 const [error,setError]=useState('');
 function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const data:Reservation = { name:String(form.get('name')||''), phone:String(form.get('phone')||''), activity:String(form.get('activity')||''), date:String(form.get('date')||''), time:String(form.get('time')||''), duration:String(form.get('duration')||''), participants:String(form.get('participants')||''), notes:String(form.get('notes')||'') };
  const validation=validateReservation(data); setError(validation); if(validation) return;
  window.open(whatsappUrl(reservationMessage(data)), '_blank', 'noopener,noreferrer');
 }
 return <div className="reservation-layout" id="reserva">
  <div><div className="eyebrow text-gold mb-4">O SEU PRÓXIMO ENCONTRO</div><h3>Reserve o seu<br/>momento criativo.</h3><p className="section-lead mt-4">Conte-nos o que tem em mente. Teremos todo o gosto em receber a sua ideia na Galeria Villa Criativa.</p><p className="form-note">Todos os pedidos de reserva estão sujeitos à confirmação de disponibilidade e das condições de utilização do espaço.</p></div>
  <form className="reservation-form" onSubmit={submit}>
   <label className="field">Nome completo *<input name="name" autoComplete="name" required placeholder="O seu nome"/></label>
   <label className="field">Número de telefone *<input name="phone" autoComplete="tel" type="tel" required placeholder="+244"/></label>
   <label className="field field-wide">Tipo de actividade *<select name="activity" required defaultValue=""><option value="" disabled>Seleccione a actividade</option>{['Workshop ou actividade artística','Reunião empresarial','Gravação de vídeo ou Vlog','Sessão fotográfica','Exposição ou formação','Apresentação ou evento privado','Outra actividade'].map(v=><option key={v}>{v}</option>)}</select></label>
   <label className="field">Data pretendida *<input name="date" type="date" required/></label>
   <label className="field">Horário *<input name="time" type="time" required/></label>
   <label className="field">Duração (horas) *<input name="duration" type="number" min="0.5" step="0.5" required placeholder="Ex.: 2"/></label>
   <label className="field">Número de participantes *<input name="participants" type="number" min="1" step="1" required placeholder="Ex.: 10"/></label>
   <label className="field field-wide">Observações adicionais<textarea name="notes" placeholder="Partilhe os detalhes da sua ideia…"/></label>
   {error&&<p role="alert" className="field-wide text-sm text-destructive">{error}</p>}
   <div className="field-wide"><Button type="submit" size="lg">Solicitar Reserva <ArrowUpRight/></Button></div>
  </form>
 </div>;
}