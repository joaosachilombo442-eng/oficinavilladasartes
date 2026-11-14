import { describe, expect, it } from 'vitest';
import { kits, products, contact, kitMessage, productMessage, whatsappUrl, reservationMessage, validateReservation, type Reservation } from '@/lib/villa-content';

describe('Official catalog and WhatsApp rules',()=>{
 it('prices Kandengue at 6000 Kz',()=>expect(kits[0].price).toBe(6000));
 it('prices Oficina at 8000 Kz',()=>expect(kits[1].price).toBe(8000));
 it('prices Workshop at 12000 Kz',()=>expect(kits[2].price).toBe(12000));
 it('prices Caixa Festa at 8000 Kz',()=>expect(products[0].price).toBe(8000));
 it('prices magnets from 6000 to 8000 Kz',()=>expect([products[1].price,products[1].maxPrice]).toEqual([6000,8000]));
 it('offers the five specified Caixa Festa colors',()=>expect(products[0].colors).toEqual(['Preto','Verde','Azul','Rosa','Branco']));
 it('routes conversations to the official number',()=>expect(new URL(whatsappUrl('Olá')).pathname).toBe('/244951444600'));
 it('identifies every selected kit',()=>kits.forEach(kit=>expect(kitMessage(kit.name)).toContain(kit.name)));
 it('identifies every selected product',()=>products.forEach(p=>expect(productMessage(p.name)).toContain(p.name)));
 it('leaves the Instagram address unconfigured',()=>expect(contact.instagramUrl).toBe(''));
 const reservation:Reservation = { name:'Teste Reserva', phone:'951444600', activity:'Workshop', date:'2026-12-20', time:'14:00', duration:'2', participants:'10', notes:'Pintura' };
 it('requires every mandatory reservation field',()=>{ for(const key of ['name','phone','activity','date','time','duration','participants']) expect(validateReservation({...reservation,[key]:''})).not.toBe(''); });
 it('includes all reservation details in WhatsApp',()=>Object.values(reservation).forEach(value=>expect(reservationMessage(reservation)).toContain(value)));
 it('accepts complete reservations without observations',()=>expect(validateReservation({...reservation,notes:''})).toBe(''));
});