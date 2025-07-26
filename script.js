document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE LA CARRERA ---
    // Se definen todos los ramos con un ID único, nombre, semestre y sus requisitos.
    // El ID es importante para que el sistema de requisitos funcione correctamente.
    const ramos = [
        // Semestre I
        { id: 'MAT-SOC', nombre: 'MATEMÁTICAS PARA CIENCIAS SOCIALES', semestre: 1, requisitos: [] },
        { id: 'INTRO-DER', nombre: 'INTRODUCCIÓN AL DERECHO', semestre: 1, requisitos: [] },
        { id: 'HIST-DER', nombre: 'HISTORIA DEL DERECHO', semestre: 1, requisitos: [] },
        { id: 'PERSONAS', nombre: 'PERSONAS', semestre: 1, requisitos: [] },
        { id: 'TEO-EST', nombre: 'TEORÍA DEL ESTADO', semestre: 1, requisitos: [] },
        { id: 'ARG-JUR', nombre: 'ARGUMENTACIÓN JURÍDICA', semestre: 1, requisitos: [] },
        { id: 'FUN-ECO', nombre: 'FUNDAMENTOS DE ECONOMÍA', semestre: 1, requisitos: [] },
        // Semestre II
        { id: 'LEX-I', nombre: 'LENGUA EXTRANJERA I', semestre: 2, requisitos: [] },
        { id: 'TALLER-ESC', nombre: 'TALLER DE ESCRITURA ACADÉMICA', semestre: 2, requisitos: [] },
        { id: 'FIL-DER', nombre: 'FILOSOFÍA DEL DERECHO', semestre: 2, requisitos: [] },
        { id: 'BIENES', nombre: 'BIENES', semestre: 2, requisitos: ['PERSONAS'] },
        { id: 'CONST-GEN', nombre: 'DERECHO CONSTITUCIONAL GENERAL', semestre: 2, requisitos: ['TEO-EST'] },
        { id: 'TEO-PROC', nombre: 'TEORIA GENERAL DEL PROCESO', semestre: 2, requisitos: [] },
        { id: 'INT-JUR', nombre: 'INTERPRETACIÓN JURÍDICA', semestre: 2, requisitos: ['ARG-JUR'] },
        // Semestre III
        { id: 'LEX-II', nombre: 'LENGUA EXTRANJERA II', semestre: 3, requisitos: ['LEX-I'] },
        { id: 'ELEC-HUM-I', nombre: 'ELECTIVA DE HUMANIDADES I', semestre: 3, requisitos: [] },
        { id: 'EST-I', nombre: 'ESTADÍSTICA I', semestre: 3, requisitos: ['MAT-SOC'] },
        { id: 'OBLI-I', nombre: 'OBLIGACIONES I', semestre: 3, requisitos: ['BIENES'] },
        { id: 'CONST-COL', nombre: 'DERECHO CONSTITUCIONAL COLOMBIANO', semestre: 3, requisitos: ['CONST-GEN'] },
        { id: 'PROC-CIV-I', nombre: 'DERECHO PROCESAL CIVIL I', semestre: 3, requisitos: ['TEO-PROC'] },
        { id: 'LAB-IND', nombre: 'DERECHO LABORAL INDIVIDUAL', semestre: 3, requisitos: [] },
        // Semestre IV
        { id: 'LEX-III', nombre: 'LENGUA EXTRANJERA III', semestre: 4, requisitos: ['LEX-II'] },
        { id: 'OBLI-II', nombre: 'OBLIGACIONES II', semestre: 4, requisitos: ['OBLI-I'] },
        { id: 'ADM-GEN', nombre: 'DERECHO ADMINISTRATIVO GENERAL', semestre: 4, requisitos: ['CONST-COL'] },
        { id: 'PROC-CIV-II', nombre: 'DERECHO PROCESAL CIVIL II', semestre: 4, requisitos: ['PROC-CIV-I'] },
        { id: 'SEG-SOC', nombre: 'SEGURIDAD SOCIAL', semestre: 4, requisitos: ['LAB-IND'] },
        { id: 'PEN-GEN', nombre: 'DERECHO PENAL GENERAL', semestre: 4, requisitos: [] },
        { id: 'PROC-CONST', nombre: 'DERECHO PROCESAL CONSTITUCIONAL', semestre: 4, requisitos: [] },
        // Semestre V
        { id: 'LEX-IV', nombre: 'LENGUA EXTRANJERA IV', semestre: 5, requisitos: ['LEX-III'] },
        { id: 'CONTR-I', nombre: 'CONTRATOS I', semestre: 5, requisitos: ['OBLI-II'] },
        { id: 'ADM-COL', nombre: 'DERECHO ADMINISTRATIVO COLOMBIANO', semestre: 5, requisitos: ['ADM-GEN'] },
        { id: 'PROBATORIO', nombre: 'DERECHO PROBATORIO', semestre: 5, requisitos: ['TEO-PROC'] },
        { id: 'LAB-COL', nombre: 'DERECHO LABORAL COLECTIVO', semestre: 5, requisitos: ['LAB-IND'] },
        { id: 'PEN-ESP', nombre: 'DERECHO PENAL ESPECIAL', semestre: 5, requisitos: ['PEN-GEN'] },
        { id: 'COMERCIAL', nombre: 'DERECHO COMERCIAL', semestre: 5, requisitos: [] },
        // Semestre VI
        { id: 'LEX-V', nombre: 'LENGUA EXTRANJERA V', semestre: 6, requisitos: ['LEX-IV'] },
        { id: 'CONTR-II', nombre: 'CONTRATOS II', semestre: 6, requisitos: ['CONTR-I'] },
        { id: 'PROC-ADM', nombre: 'DERECHO PROCESAL ADMINISTRATIVO', semestre: 6, requisitos: ['ADM-COL'] },
        { id: 'PROC-LAB', nombre: 'DERECHO PROCESAL LABORAL', semestre: 6, requisitos: ['LAB-COL'] },
        { id: 'PROC-PEN', nombre: 'DERECHO PROCESAL PENAL', semestre: 6, requisitos: ['PEN-ESP'] },
        { id: 'SOCIEDADES', nombre: 'DERECHO DE SOCIEDADES', semestre: 6, requisitos: ['COMERCIAL'] },
        { id: 'FAMILIA', nombre: 'DERECHO DE FAMILIA', semestre: 6, requisitos: [] },
        { id: 'MASC', nombre: 'MECAN ALTER EN LA SOL DE CONFL', semestre: 6, requisitos: [] },
        // Semestre VII
        { id: 'ELEC-HUM-II', nombre: 'ELECTIVA DE HUMANIDADES II', semestre: 7, requisitos: [] },
        { id: 'RESP-CIV', nombre: 'RESPONSABILIDAD CIVIL Y DEL ES', semestre: 7, requisitos: ['CONTR-II'] },
        { id: 'CONTR-EST', nombre: 'CONTRATACIÓN ESTATAL', semestre: 7, requisitos: [] },
        { id: 'INT-PUB', nombre: 'DERECHO INTERNACIONAL PUBLICO', semestre: 7, requisitos: [] },
        { id: 'TIT-VAL', nombre: 'TITULO VALORES', semestre: 7, requisitos: ['COMERCIAL'] },
        { id: 'SUCESIONES', nombre: 'DERECHO DE SUCESIONES', semestre: 7, requisitos: ['FAMILIA'] },
        { id: 'CONS-JUR-I', nombre: 'CONSULTORIO JURIDICO I', semestre: 7, requisitos: ['ADM-GEN', 'SEG-SOC'] },
        // Semestre VIII
        { id: 'CREA-EMP', nombre: 'CREATIVIDAD Y EMPRENDIMIENTO', semestre: 8, requisitos: [] },
        { id: 'ELEC-JUR-I', nombre: 'ELECTIVA DEL AREA JURÍDICA I', semestre: 8, requisitos: [] },
        { id: 'ELEC-JUR-II', nombre: 'ELECTIVA JURÍDICA II', semestre: 8, requisitos: [] },
        { id: 'INT-PRIV', nombre: 'DERECHO INTERNACIONAL PRIVADO', semestre: 8, requisitos: ['INT-PUB'] },
        { id: 'CONS-JUR-II', nombre: 'CONSULTORIO JURÍDICO II', semestre: 8, requisitos: ['CONS-JUR-I', 'PROC-CIV-II', 'PEN-ESP'] },
        { id: 'INV-JUR', nombre: 'M DE LA INV JURÍDICA Y SOCIOJU', semestre: 8, requisitos: ['TALLER-ESC'] },
        // Semestre IX
        { id: 'ETICA', nombre: 'ÉTICA Y PROFESIONALISMO', semestre: 9, requisitos: [] },
        { id: 'CIUD-GLOB', nombre: 'CIUDADANÍA GLOBAL', semestre: 9, requisitos: [] },
        { id: 'ELEC-HUM-III', nombre: 'ELECTIVA DE HUMANIDADES III', semestre: 9, requisitos: [] },
        { id: 'ELEC-JUR-III', nombre: 'ELECTIVA DEL AREA JURÍDICA III', semestre: 9, requisitos: [] },
        { id: 'ELEC-JUR-IV', nombre: 'ELECTIVA DEL ÁREA JURÍDICA IV', semestre: 9, requisitos: [] },
        { id: 'PROP-INT', nombre: 'PROPIEDAD INTELECTUAL', semestre: 9, requisitos: [] },
        { id: 'CONS-JUR-III', nombre: 'CONSULTORIO JURÍDICO III', semestre: 9, requisitos: ['CONS-JUR-II', 'PROC-PEN', 'PROC-LAB', 'PROC-ADM'] },
        // Semestre X
        { id: 'ELEC-JUR-V', nombre: 'ELECTIVA DEL AREA JURÍDICA V', semestre: 10, requisitos: [] },
        { id: 'ELEC-JUR-VI', nombre: 'ELECTIVA DEL AREA JURÍDICA VI', semestre: 10, requisitos: [] },
        { id: 'CONS-JUR-IV', nombre: 'CONSULTORIO JURÍDICO IV', semestre: 10, requisitos: ['CONS-JUR-III'] },
    ];

    // --- 2. MANEJO DEL ESTADO Y LOCALSTORAGE ---
    const mallaContainer = document.getElementById('malla-container');
    const modal = document.getElementById('modal-bloqueo');
    const cerrarModalBtn = document.getElementById('cerrar-modal');
    const listaRequisitos = document.getElementById('lista-requisitos');
    const STORAGE_KEY = 'ramosAprobadosDerecho';

    // Obtiene los ramos aprobados desde el localStorage. Si no hay nada, devuelve un array vacío.
    const getAprobados = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    // Guarda el array de ramos aprobados en el localStorage.
    const saveAprobados = (aprobados) => localStorage.setItem(STORAGE_KEY, JSON.stringify(aprobados));

    let aprobados = getAprobados();

    // --- 3. LÓGICA PRINCIPAL ---

    /**
     * Verifica si todos los requisitos de un ramo están cumplidos.
     * @param {object} ramo - El objeto del ramo a verificar.
     * @returns {boolean} - true si todos los requisitos están en la lista de aprobados, false de lo contrario.
     */
    const requisitosCumplidos = (ramo) => {
        if (ramo.requisitos.length === 0) return true;
        return ramo.requisitos.every(reqId => aprobados.includes(reqId));
    };
    
    /**
     * Obtiene los nombres de los requisitos que aún no han sido aprobados.
     * @param {object} ramo - El objeto del ramo a verificar.
     * @returns {string[]} - Una lista con los nombres de los ramos faltantes.
     */
    const getRequisitosFaltantes = (ramo) => {
        return ramo.requisitos
            .filter(reqId => !aprobados.includes(reqId))
            .map(reqId => ramos.find(r => r.id === reqId).nombre);
    };

    /**
     * Dibuja o actualiza toda la malla curricular en la página.
     */
    const renderMalla = () => {
        mallaContainer.innerHTML = ''; // Limpia la malla antes de volver a dibujarla

        // Crea las columnas para cada semestre
        for (let i = 1; i <= 10; i++) {
            const columna = document.createElement('div');
            columna.className = 'semestre-columna';
            columna.innerHTML = `<div class="semestre-titulo">Semestre ${i}</div>`;
            mallaContainer.appendChild(columna);
        }

        // Agrega cada ramo a su columna correspondiente
        ramos.forEach(ramo => {
            const ramoDiv = document.createElement('div');
            ramoDiv.className = 'ramo';
            ramoDiv.textContent = ramo.nombre;
            ramoDiv.dataset.id = ramo.id; // Asigna el ID al elemento para identificarlo

            // Aplica la clase correcta según el estado del ramo
            if (aprobados.includes(ramo.id)) {
                ramoDiv.classList.add('aprobado');
            } else if (requisitosCumplidos(ramo)) {
                ramoDiv.classList.add('disponible');
            } else {
                ramoDiv.classList.add('bloqueado');
            }

            mallaContainer.children[ramo.semestre - 1].appendChild(ramoDiv);
        });
    };

    // --- 4. MANEJO DE EVENTOS ---

    /**
     * Se ejecuta cuando el usuario hace clic en un ramo.
     */
    mallaContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('ramo')) return;

        const ramoId = e.target.dataset.id;
        const ramo = ramos.find(r => r.id === ramoId);

        if (aprobados.includes(ramoId)) {
            // Si ya está aprobado, lo desaprueba (lo quita de la lista)
            aprobados = aprobados.filter(id => id !== ramoId);
        } else {
            // Si no está aprobado, verifica si está bloqueado
            if (!requisitosCumplidos(ramo)) {
                // Si está bloqueado, muestra el modal con los requisitos faltantes
                const faltantes = getRequisitosFaltantes(ramo);
                listaRequisitos.innerHTML = faltantes.map(nombre => `<li>${nombre}</li>`).join('');
                modal.className = 'modal-visible'; // Muestra el modal
                return; // Detiene la ejecución para no aprobarlo
            }
            // Si no está bloqueado, lo aprueba (lo agrega a la lista)
            aprobados.push(ramoId);
        }
        
        saveAprobados(aprobados); // Guarda el nuevo estado en localStorage
        renderMalla(); // Vuelve a dibujar la malla para reflejar los cambios
    });

    // Cierra el modal al hacer clic en la 'x'
    cerrarModalBtn.addEventListener('click', () => {
        modal.className = 'modal-oculto';
    });

    // Cierra el modal al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target.className === 'modal-visible') {
            modal.className = 'modal-oculto';
        }
    });

    // --- 5. INICIALIZACIÓN ---
    renderMalla(); // Dibuja la malla por primera vez al cargar la página.
});
