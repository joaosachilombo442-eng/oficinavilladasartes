import kandengueAsset from '@/assets/kit-kandengue-saco.jpg.asset.json';
const kandengue = kandengueAsset.url;
import oficina from '@/assets/kit-oficina.jpg';
import workshop from '@/assets/kit-workshop.jpg';
import festaAsset from '@/assets/caixa-festa-branca.jpg.asset.json';
const festa = festaAsset.url;
import imanes from '@/assets/imanes.jpg';

export const contact = { phone: '+244 951 444 600', whatsapp: '244951444600', email: 'oficinavilladasartes2026@gmail.com', instagram: 'OficinaVillaDasArtes', instagramUrl: '', location: 'Morro Bento, Luanda, Angola' };
export const navigation = [{ id:'inicio', label:'Início' }, { id:'quem-somos', label:'Quem Somos' }, { id:'clube-criativo', label:'Clube Criativo' }, { id:'produtos', label:'Produtos' }, { id:'galeria', label:'Galeria' }, { id:'contactos', label:'Contactos' }];
export const kits = [
 { name:'Kit Kandengue', price:6000, image:kandengue, label:'PARA PEQUENOS ARTISTAS', description:'Um kit criativo especialmente pensado para crianças, para estimular a imaginação e a expressão artística.', includes:['Saco para pintar', 'Pequenas cores de feltro', 'Livro de histórias para pintar'] },
 { name:'Kit Oficina das Artes', price:8000, image:oficina, label:'PARA COMEÇAR A CRIAR', description:'Um conjunto de iniciação à pintura, ideal para experiências artísticas e actividades criativas.', includes:['1 mini tela', '1 pincel', 'Tintas', '1 paleta'] },
 { name:'Kit Workshop', price:12000, image:workshop, label:'A EXPERIÊNCIA COMPLETA', description:'Um kit mais completo, preparado para experiências de pintura e participação em workshops artísticos.', includes:['1 mini tela', '1 cavalete', '1 paleta', '1 avental', 'Tintas', '1 pincel'] },
];
export const products = [
 { name:'Caixa Festa', price:8000, maxPrice:undefined, image:festa, description:'Uma box especial com um kit para apagar as velas de aniversário, ideal para complementar a celebração do momento do bolo.', action:'Encomendar', colors:['Preto','Branco','Rosa-claro','Azul-claro','Verde-claro'] },
 { name:'Ímanes Personalizados', price:8000, maxPrice:undefined, image:imanes, description:'Conjunto de 6 ímanes personalizados para lembranças, presentes, eventos e empresas. Soluções criativas para eternizar momentos especiais e valorizar marcas.', action:'Solicitar personalização', colors:[] },
];
export function formatPrice(value:number) { return new Intl.NumberFormat('pt-AO').format(value).replace(/\s/g,'.'); }
export function whatsappUrl(message:string) { return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`; }
export function kitMessage(name:string) { return `Olá, Oficina Villa das Artes! Gostaria de me inscrever para o ${name}. Podem informar-me sobre a disponibilidade?`; }
export function productMessage(name:string, color?:string) { return `Olá, Oficina Villa das Artes! Gostaria de ${name === 'Caixa Festa' ? 'encomendar a Caixa Festa' : 'solicitar Ímanes Personalizados'}${color ? ` na cor ${color}` : ''}. Podem dar-me mais informações?`; }
export const galleryOffers = [
 { key:'workshops', title:'Workshops e actividades artísticas', price:40000, items:['Até 12 participantes','O cliente traz os seus participantes e materiais','A Oficina disponibiliza o espaço'] },
 { key:'exposicoes', title:'Exposições e eventos corporativos', price:50000, items:['Exposições artísticas','Eventos corporativos','Apresentações e outras actividades'] },
 { key:'cocktails', title:'Cocktails e outras actividades', price:undefined as number|undefined, items:['Cocktails e networking','Utilização do espaço para outras actividades','Condições sob consulta'] },
];
export function galleryOfferMessage(title:string) { return `Olá, Oficina Villa das Artes! Gostaria de obter informações sobre a utilização da Galeria Villa Criativa para: ${title}.`; }
export const galleryMessage = 'Olá, Oficina Villa das Artes! Gostaria de obter informações sobre a Galeria Villa Criativa e as condições de utilização do espaço.';
export type Reservation = { name:string; phone:string; activity:string; date:string; time:string; duration:string; participants:string; notes:string };
export function reservationMessage(data:Reservation) {
 return ['Olá, Oficina Villa das Artes! Gostaria de solicitar uma reserva da Galeria Villa Criativa.', '', `Nome completo: ${data.name}`, `Telefone: ${data.phone}`, `Tipo de actividade: ${data.activity}`, `Data pretendida: ${data.date}`, `Horário: ${data.time}`, `Duração: ${data.duration}`, `Número de participantes: ${data.participants}`, `Observações: ${data.notes || 'Sem observações.'}`].join('\n');
}
export function validateReservation(data:Reservation) {
 if (![data.name,data.phone,data.activity,data.date,data.time,data.duration,data.participants].every(v=>v.trim())) return 'Preencha todos os campos obrigatórios.';
 if (data.phone.replace(/\D/g,'').length < 9) return 'Introduza um número de telefone válido.';
 if (Number(data.duration)<=0 || Number(data.participants)<1 || !Number.isInteger(Number(data.participants))) return 'Indique uma duração válida e pelo menos um participante.';
 return '';
}