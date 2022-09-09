import { calculateWeight } from 'apps/kargoru-web/src/app/core/utils/calculations';

export const Messages = {
  Error: 'Por favor, intente nuevamente o contacte al administrador del sistema',
  InvalidForm: 'Aún no has diligenciado completamente los campos de tu cotización.',
  LoginExpired: 'Tiempo expirado, por favor inicie sesión nuevamente.',
  LoginWelcome: 'Usuario autenticado exitosamente, bienvenido.',
  InvalidCredentials: 'Usuario o contraseña inválida.',
  EmailNotVerified: 'El email no se encuentra activo, por favor verifique su correo electrónico.',
  UserExistsError: 'El usuario ingresado ya existe, por favor ingrese uno diferente.',
  NitExistsError: 'Ya existe un usuario con el numeró de NIT ingresado, por favor ingrese uno diferente.',
  CampaignCodeError: 'El codigo de campaña ingresado invalido.',
  LoginUserSuccessfullCreated: 'Usuario creado exitosamente.',
  Remove:
    '¿Está seguro que desea remover el elemento seleccionado?. Esta es una acción permanente.',
  Removed: 'Elemento removido correctamente.',
  StatusNone: '-',
  StatusPendingForReview: 'Pendiente por revisión',
  StatusInReview: 'En revisión',
  StatusApproved: 'Aprobado',
  StatusNotApproved: 'No Aprobado',
  SuccessfulRequest: 'Solicitud enviada exitosamente',
  Saving: 'Guardando, por favor espere...',
  Saved: 'Información guardada correctamente.',
  SavedWithErrors:
    'Guardado con errores, intente nuevamente o contacte a un administrador del sistema.',
  Updated: 'Información actualizada correctamente.',
  Downloading: 'Descargando, por favor espere...',
  ConfirmationMessage: 'Mensaje de confirmación',
  SendQuoteRequestConfirmation:
    '¿Está seguro que desea enviar la solicitud de cotización?<br>Una vez enviada no podrá editarla nuevamente.',
  SendQuoteConfirmation: '¿Está seguro que desea enviar la cotización?',
  CancelQuoteRequestConfirmation: '¿Está seguro que desea cancelar la solicitud de cotización?',
  CreditRequestSuccessTitle: 'Solicitud de crédito enviada',
  CreditRequestSuccessMessage:
    'Pronto un experto Kargoru se pondrá en contacto. Para facilitar el proceso de estudio de' +
    ' crédito asegúrate de tener toda la documentación de la empresa actualizada en la sección de Mi perfil',
  WeightUnit: 'kg',
  VolumeUnit: 'm³',
  OperationTypeImport: 'Importación',
  OperationTypeExport: 'Exportación',
  LCLLabel: 'LCL - Carga Suelta',
  FCLLabel: 'FCL - Contenedor Entero',
  BookQuote: '¿Está seguro que desea Reservar esta cotizacón?',
  BookQuoteSuccess: 'Cotización reservada exitosamente.',
};

export const DynamicMessages = {
  changeUserStatusConfirmation: (currentStatus: string, newStatus: string) =>
    `Está seguro que desea cambiar el estado del usuario <b>${currentStatus}</b> a <b>${newStatus}</b>'`,
  getUnitLabel: (units: number) => (units === 1 ? 'Unidad' : 'Unidades'),
};
