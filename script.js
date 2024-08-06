document.addEventListener('DOMContentLoaded', function() {
    function showMessage(buttonId, helpDivId, messageText) {
        let messageDisplayed = false; // Flag para verificar se a mensagem está visível
        let hideTimeout; // Para armazenar o timeout

        const button = document.getElementById(buttonId);
        const helpDiv = document.getElementById(helpDivId);

        // Verifica se o botão e a div de ajuda existem
        if (!button || !helpDiv) {
            console.error(`Elemento não encontrado: ${buttonId} ou ${helpDivId}`);
            return;
        }

        button.addEventListener('click', function() {
            // Se houver um timeout ativo, cancela-o
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }

            if (messageDisplayed) {
                // Se a mensagem estiver visível, remove-a
                helpDiv.innerHTML = '';
                messageDisplayed = false;
            } else {
                // Se a mensagem não estiver visível, exibe-a
                const message = document.createElement('p');
                message.textContent = messageText;
                message.style.marginTop = '-25px'; // Ajusta o espaçamento conforme necessário
                message.style.color = '#666'; // Define a cor do texto
                message.style.border = '1px solid black';
                message.style.borderRadius = '10px';

                // Limpa qualquer conteúdo existente antes de adicionar a nova mensagem
                helpDiv.innerHTML = '';

                // Adiciona a nova mensagem ao elemento
                helpDiv.appendChild(message);

                // Marca a mensagem como exibida
                messageDisplayed = true;

                // Define um timeout para esconder a mensagem após 25 segundos
                hideTimeout = setTimeout(function() {
                    helpDiv.innerHTML = '';
                    messageDisplayed = false;
                }, 25000); // 25000 milissegundos = 25 segundos
            }
        });
    }

    showMessage('cpf', 'cpfHelp', 'Informar o número do CPF corretamente (preenchimento obrigatório). Esse item não será obrigatório para algumas exceções, que são: estrangeiros; pessoa em situação de rua no momento; pessoa privada de liberdade no momento; indígena.');
    showMessage('cns', 'cnsHelp', 'Número a ser preenchido de acordo com o cartão nacional de saúde (cartão SUS) do(a) usuário(a). Caso o(a) usuário(a) SUS seja cadastrado no SISCEL – Sistema de Controle de Exames Laboratoriais, o número do cartão do SUS virá preenchido automaticamente.');
    showMessage('sinan', 'sinanHelp', 'Informar o número informado no Sistema de Informação de Agravos de Notificação.');
    showMessage('prontuario', 'prontuarioHelp', 'Número do Prontuário do(a) Usuário(a) SUS.');
    showMessage('ip', 'ipHelp', 'Se a pessoa se identificar como mulher transexual, homem transexual ou travesti/mulher travesti, perguntar com qual nome de identificação prefere ser chamado(a), se pelo nome social ou pelo nome de registro civil. Sempre se referir à pessoa pelo seu nome de preferência (preenchimento obrigatório).');
    showMessage('usuariocivil', 'usuariocivilHelp', 'Nome completo do(a) usuário(a) SUS, sem qualquer abreviação, conforme um documento de identidade oficial (preenchimento obrigatório).');
    showMessage('nomesocial', 'nomesocialHelp', 'De acordo com o decreto 8.727/2016, é a designação pela qual a pessoa travesti ou transexual se identifica e é socialmente reconhecida. Preencher apenas para os(as) usuários(as) que possuírem nome social que divirja do nome de registro.');
    showMessage('nomemae', 'nomemaeHelp', 'Nome Completo da Mãe sem qualquer abreviação (preenchimento obrigatório).');
    showMessage('datanascimento', 'datanascimentoHelp', 'Informar a data de nascimento do(a) Usuário(a) SUS (preenchimento obrigatório).');
    showMessage('racacor', 'racacorHelp', 'Refira, dentre as opções disponíveis, sua raça/cor. É importante observar que esta classificação deverá ser auto-referida. (Preenchimento obrigatório).');
    showMessage('identidadeg', 'identidadegeneroHelp', 'É a percepção que uma pessoa tem de si como sendo homem, mulher, mulher trans, homem trans, ou travesti/mulher travesti, independentemente de seu órgão genital de nascimento e orientação sexual. Para identidade de gênero, marque sempre como a pessoa se percebe ou se define. A resposta para esse item deve ser sempre autodeclarada, mesmo que a opinião do profissional de saúde não coincida com a declarada pelo(a) usuário(a).');
    showMessage('sexoatribuidonascimento', 'sexoatribuidonascimentoHelp', 'Marcar de acordo com documento de identificação do(a) usuário(a).');
    showMessage('orientacaosexual', 'orientacaosexualHelp', 'É por quem a pessoa se sente atraída afetiva e sexualmente, podendo ser pessoas do mesmo gênero (homossexual), de gênero diferente (heterossexual) ou por ambos os gêneros (bissexual). A resposta para esse item deve ser sempre autodeclarada, mesmo que a opinião do profissional de saúde não coincida com a declarada pelo(a) usuário(a).');
    showMessage('cidadenascimento', 'cidadenascimentoHelp', 'Cidade de Nascimento (cidade/UF): Nome da cidade de nascimento e UF (preenchimento obrigatório).');
    showMessage('paisnascimento', 'paisnascimentoHelp', 'Informar o país de nascimento do(a) Usuário(a) SUS (preenchimento obrigatório).');
    showMessage('nacionalidade', 'nacionalidadeHelp', 'Informar a nacionalidade do CPF do(a) Usuário(a) SUS (preenchimento obrigatório).');
    showMessage('situacaoestrangeiro', 'situacaoestrangeiroHelp', 'Informar se o paciente estrangeiro é residente, habitante de fronteira ou não residente.');
    showMessage('escolaridade', 'escolaridadeHelp', 'Informar o número de anos de estudo concluídos do(a) usuário(a), dentre as faixas disponíveis. A classificação é obtida em função do número de anos que a pessoa teve acesso a estudo, e/ou o grau que a pessoa está frequentando ou frequentou.');
    showMessage('pessoaemsituacaoderua', 'pessoaemsituacaoderuaHelp', 'Informar se o(a) usuário(a) está em situação de rua ou não.');
    showMessage('pessoaprivadadeliberdade', 'pessoaprivadadeliberdadeHelp', 'Informar se o(a) usuário(a) está no sistema prisional ou em outra instituição de privação de liberdade.');
    showMessage('permitecontato', 'permitecontatoHelp', 'O preenchimento deste campo é obrigatório e requer atenção especial dos profissionais. O profissional deverá perguntar ao usuário se ele permite que o serviço entre em contato com ele em caso de necessidade; por exemplo, se ele não vier para buscar os medicamentos em determinado mês, ou se o serviço necessitar mudar data de agendamento. Além de uma autorização de contato, implica também na assunção de compromisso ético dos profissionais. Através desta permissão, os profissionais da farmácia comprometem-se a fazer uso cauteloso das informações prestadas, sempre visando resguardar ao máximo o sigilo e confidencialidade das informações. Na prática isto significa, por exemplo, não identificar o remetente (no caso, a farmácia) nas correspondências enviadas e respeitar estritamente a forma de contato que o usuário autorizou. Com isso, o que se busca é evitar qualquer impacto social negativo que possa advir da realização deste procedimento.');
    showMessage('tipocontato', 'tipocontatoHelp', 'Caso o usuário autorize o contato do serviço, deverão ser registradas as formas de contato por ele autorizadas.');
    showMessage('endereco', 'enderecoHelp', 'Refere-se ao endereço de residência do usuário - nome da rua, avenida, entre outros. Observar que as informações de endereços (exceto município) só deverão ser preenchidas caso o usuário autorize contato.');
    showMessage('bairro', 'bairroHelp', 'Informe o bairro de residência do usuário.');
    showMessage('cep', 'cepHelp', 'Código de Endereçamento Postal, para localizar a região de residência do usuário.');
    showMessage('cidaderesidencia', 'cidaderesidenciaHelp', 'Informe o nome da cidade e UF onde o usuário reside (preenchimento obrigatório).');
    showMessage('email', 'emailHelp', 'Informe o e-mail de contato do usuário.');
    showMessage('tipotelefone', 'tipotelefoneHelp', 'Informar se o telefone é residencial, comercial ou celular. O número do telefone deve ser precedido pelo DDD. Poderão ser registrados mais de um número.');
    showMessage('observacoes', 'observacoesHelp', 'Observações referentes ao telefone informado que facilitem o contato, tais como horário de contato preferencial, entre outros.');
    showMessage('estudante', 'estudanteHelp', 'Informar se o usuário é estudante e, se sim, o nível de escolaridade ou se participa de algum programa de bolsa de estudos.');
    showMessage('programaestudo', 'programaestudoHelp', 'Nome do programa educacional ou de bolsas que o estudante está inscrito.');
    showMessage('indicacao', 'indicacaoHelp', 'Informar qualquer outro dado relevante sobre a situação do usuário que possa impactar o atendimento ou acompanhamento.');
    showMessage('acompanhamentomedico', 'acompanhamentomedicoHelp', 'Para os(as) Usuário(as) SUS atendidos na rede pública, de um “clique” em pública, para aqueles(as) Usuário(as)SUS atendidos por médicos particulares, indique privada. (Preenchimento obrigatório).');
    showMessage('pessoasautorizadas', 'pessoasautorizadasHelp', 'O(a) Usuário(a) SUS, no ato do seu cadastramento, poderá indicar pessoas autorizadas a retirarmedicamentos em seu nome, quando for necessário (no máximo 3 nomes).');
});
