import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

export function formatDate(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('pt-BR').format(d);
}

export function formatCPF(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function formatPhone(phone: string): string {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

export function formatPlate(plate: string): string {
    // Formato Mercosul: ABC1D23
    return plate.toUpperCase().replace(/([A-Z]{3})(\d)([A-Z]\d{2})/, '$1-$2$3');
}
