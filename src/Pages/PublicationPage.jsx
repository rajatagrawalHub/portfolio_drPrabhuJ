import BookImg from "../Assets/bookImg.svg";
import RowInfoComponentv4 from "../Components/RowInfocomponentv4";
import RowInfoComponent from "../Components/RowInfocomponent";
import { useEffect, useState } from "react";

export default function PublicationPage(){
    const [showAll, setShowAll] = useState("hide");

    useEffect(()=>{
        let RICBoxes = document.querySelectorAll(".circleYear");
        RICBoxes.forEach((box)=>{
            if(box.classList.contains("last-row"))box.classList.remove("last-row")
        })
        if (RICBoxes.length > 0) {
            if(showAll == "hide"){
                RICBoxes[9].classList.add("last-row");
            }else{
                RICBoxes[RICBoxes.length - 1].classList.add("last-row");
            }
        }
    },[showAll])

    function hideShowClick(){
        if(showAll == "hide"){
            setShowAll("show")
        }else{
            setShowAll("hide")
        }
    }

    const journal = [
        "https://www.mdpi.com/2227-7390/11/5/1136",
        "https://ijisae.org/index.php/IJISAE/article/view/3624",
        "https://search.ebscohost.com/login.aspx?direct=true&amp;profile=ehost&amp;scope=site&amp;authtype=crawler&amp;jrnl=15483673&amp;AN=161698395&amp;",
        "https://link.springer.com/article/10.1007/s10845-021-01866-0",
        "https://content.iospress.com/download?id=10.3233/IDA-237430",
        "https://www.mdpi.com/2076-3417/13/5/2801",
        "https://www.hindawi.com/journals/mpe/2023/7317938/",
        "https://link.springer.com/article/10.1007/s12145-022-00887-4",
        "https://www.mdpi.com/2075-4418/13/3/548",
        "https://www.hindawi.com/journals/mpe/2023/6048891/",
        "https://www.nature.com/articles/s41598-023-44763-7",
        "https://www.mdpi.com/2075-4418/13/18/2925",
        "https://www.nature.com/articles/s41598-023-40717-1",
        "https://www.mdpi.com/2075-4418/13/8/1385",
        "https://www.worldscientific.com/doi/abs/10.1142/S1752890922420065",
        "https://www.mdpi.com/2079-9292/12/4/862",
        "https://www.hindawi.com/journals/mpe/2023/1040461/",
        "https://link.springer.com/article/10.1186/s12859-023-05584-7",
        "https://www.worldscientific.com/doi/abs/10.1142/S021853932350002X",
        "https://link.springer.com/article/10.1007/s00521-023-09171-y",
        "https://www.worldscientific.com/doi/abs/10.1142/S1752890922420107",
        "https://link.springer.com/article/10.1007/s11600-022-00759-x",
        "https://www.hindawi.com/journals/cin/2022/8014979/",
        "https://link.springer.com/article/10.1007/s11600-022-00854-z",
        "https://cdn.techscience.cn/ueditor/files/cmc/TSP_CMC-72-3/TSP_CMC_25865/TSP_CMC_25865.pdf",
        "https://www.mdpi.com/2075-4418/12/12/3188",
        "https://www.hindawi.com/journals/amse/2022/8470743/",
        "https://www.hindawi.com/journals/cmmm/2022/7672196/",
        "https://www.hindawi.com/journals/cmmm/2022/8571970/",
        "https://www.hindawi.com/journals/mpe/2022/9710667/",
        "https://www.tandfonline.com/doi/abs/10.1080/1206212X.2019.1700335",
        "https://www.hindawi.com/journals/cmmm/2022/9166873/",
        "https://www.hindawi.com/journals/cin/2022/9423395/",
        "https://link.springer.com/article/10.1007/s11600-022-00911-7",
        "https://www.mdpi.com/2079-9292/11/21/3618",
        "https://www.hindawi.com/journals/jnm/2022/3947760/",
        "https://www.emerald.com/insight/content/doi/10.1108/IJICC-05-2021-0099/full/html?utm_campaign=Emerald_Engineering_PPV_De",
        "https://www.hindawi.com/journals/jnm/2022/9238968/",
        "https://www.hindawi.com/journals/mpe/2022/5736630/",
        "https://link.springer.com/article/10.1007/s10772-021-09838-8",
        "https://www.emerald.com/insight/content/doi/10.1108/IJPCC-03-2020-0009/full/html",
        "https://www.inderscienceonline.com/doi/abs/10.1504/IJUWBCS.2021.119137",
        "https://www.sciencedirect.com/science/article/pii/S0263224120309660",
        "https://www.sciencedirect.com/science/article/pii/S1574954121001618",
        "https://content.iospress.com/articles/web-intelligence/web210452",
        "https://www.inderscienceonline.com/doi/abs/10.1504/IJUWBCS.2021.119132",
        "https://link.springer.com/article/10.1007/s13735-021-00213-6",
        "https://pesquisa.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/pt/covidwho-1404118",
        "https://link.springer.com/article/10.1007/s13735-020-00196-w",
        "https://www.inderscienceonline.com/doi/abs/10.1504/IJSSE.2021.121471",
        "https://link.springer.com/article/10.1007/s12652-020-02641-4",
        "https://www.inderscienceonline.com/doi/abs/10.1504/IJGUC.2020.108449",
        "https://www.igi-global.com/article/learnability-of-interestingness-with-semantic-similarity-and-reasoning-in-the-knowledge-base-of-decision-support-systems/245743",
        "https://www.emerald.com/insight/content/doi/10.1108/IJPCC-06-2020-0054/full/html",
        "https://www.inderscienceonline.com/doi/abs/10.1504/IJITST.2020.109535",
        "https://www.igi-global.com/article/learning-models-for-concept-extraction-from-images-with-drug-labels-for-a-unified-knowledge-base-utilizing-nlp-a",
        "https://www.inderscienceonline.com/doi/abs/10.1504/IJITST.2020.107079",
        "https://www.emerald.com/insight/content/doi/10.1108/IJPCC-06-2020-0053/full/html",
        "https://www.emerald.com/insight/content/doi/10.1108/IJPCC-06-2020-0056/full/html",
        "https://link.springer.com/article/10.1007/s10772-020-09687-x",
        "https://dl.acm.org/doi/abs/10.4018/IJeC.2020100101",
        "https://onlinelibrary.wiley.com/doi/abs/10.1002/ett.3991",
        "https://research.vit.ac.in/publication/image-distribution-with-scalable-access-control",
        "https://www.researchgate.net/publication/336737374_Ameliorating_the_Privacy_on_Large_Scale_Aviation_Dataset_by_Implementing_MapReduce_Multidimensional_Hybrid_k-Anonymization",
        "https://www.igi-global.com/article/hybrid-model-for-movie-recommendation-system-using-fireflies-and-fuzzy-c-means/240661",
        "https://pinpdf.com/a632bcd48900b06915e5000051fd977050033.html",
        "https://iaeme.com/MasterAdmin/Journal_uploads/IJCIET/VOLUME_10_ISSUE_2/IJCIET_10_02_212.pdf",
        "https://research.vit.ac.in/publication/an-analysis-on-ecse-load-balancing-algorithm-with",
        "https://research.vit.ac.in/publication/secured-service-chains-tuned-resource-sharing",
        "https://www.academia.edu/download/99617021/Research_20Work.pdf",
        "http://joiv.org/index.php/joiv/article/view/118",
        "https://research.vit.ac.in/publication/comparison-of-multi-criteria-recommendation-system-for-improving",
        "http://www.joiv.org/index.php/joiv/article/view/58",
        "http://www.joiv.org/index.php/joiv/article/view/40",
        "https://www.researchgate.net/publication/309670583_A_survey_on_slim_process_with_developers_in_agilesoftwareagile_software",
        "https://www.researchgate.net/publication/316887031_EFE_Efficient_feature_extraction_algorithm_for_dynamic_malware_analysis_in_windows_executables_using_API_call_sequence",
        "https://research.vit.ac.in/publication/home-intruder-detection-system",
        "https://www.ripublication.com/ijaer10/ijaerv10n19_18.pdf",
        "https://research.vit.ac.in/publication/a-new-approach-to-cyber-security-through-keylogger",
        "http://www.jatit.org/volumes/Vol64No1/2Vol64No1.pdf",
        "https://link.springer.com/chapter/10.1007/978-981-15-5679-1_34",
        "https://link.springer.com/chapter/10.1007/978-981-15-5679-1_33",
        "https://link.springer.com/chapter/10.1007/978-981-13-1927-3_46",
        "https://link.springer.com/chapter/10.1007/978-981-13-1927-3_44",
        "https://iopscience.iop.org/article/10.1088/1757-899X/263/4/042049/meta",
        "https://onlinelibrary.wiley.com/doi/abs/10.1002/9781394175253.ch10",
        "https://www.igi-global.com/chapter/amelioration-of-big-data-analytics-by-employing-big-data-tools-and-techniques/291051",
        "https://link.springer.com/chapter/10.1007/978-981-15-4218-3_19",
        "https://link.springer.com/chapter/10.1007/978-981-15-4218-3_19"
      ];
    
    return(
        <div className="subsection flex-Column" id="publicationSection">
            <div className="fixed">
                <div className="btnTitle">
                    <p>Publications</p>
                </div>
            </div>
            <p className="SectionTitle">Books Published</p>
            <RowInfoComponent title={"GUI Testing"} subtitle={'Event Flow Model Framework'} addressline1={"Lambert Academy Publishing"} addressline2={"22 February 2023"} addressline3={"Pages: 152 Pages"} />
            <div className="flex-row bookSection" id="bookSec">
                <img src={BookImg} id="bookImg" />
                <p className="bookdescription">
                The event handler's latency for GUI application is increased so testers have to spend more money on that to minimize delay to count the responsiveness of the GUI application. Forced by work on prioritization algorithm for test case generation, the fully automatic model based GUI testing resulted in the effective ordering of the test cases The infeasible problems of test cases and their ripping methods for constructing Event Flow Graph might miss some of the paths since they are not reachable at some state but available at another state and so not optimized. GUI Testing can be performed both manually with a human tester or could be performed automatically with use of a software program. Finding errors when the test suite ran at night, and telling testers in the morning, because we have some known problems.
                </p>
            </div>

                <p className="SectionTitle">Journal Papers</p>
                <RowInfoComponentv4 title={"Hybrid Whale and Gray Wolf Deep Learning Optimization Algorithm for Prediction of Alzheimer's Disease"} description={"Dhakhinamoorthy C., Mani S.K., Mathivanan S.K., Mohan S., Jayagopal P., Mallik S., Qin H., Mathematics, Vol:11, Issue: 5, DOI: 10.3390/math11051136"} year={"2023"} link = {journal[0]} />
                <RowInfoComponentv4 title={"A Block-Based Feature Selection Method for Classification of Web Pages"} description={"Abdullah A.; Sandeep Kumar M.; Prabhu J.; Balusamy B., International Journal of Intelligent Systems and Applications in Engineering, Vol:11, Issue: 4, Pg.No(890-902)"} year={"2023"} link = {journal[1]} />
                <RowInfoComponentv4 title={"Deep Learning Speech Synthesis Model for Word/Character-Level Recognition in the Tamil Language"} description={"Rajendran S., Raja K.T., Nagarajan G., Dass S.A., Kumar S.M., Jayagopal P., International Journal of e-Collaboration, Vol:19, Issue: 4, DOI: 10.4018/IJeC.316824"} year={"2023"} link = {journal[2]} />
                <RowInfoComponentv4 title={"Context-sensitive lexicon for imbalanced text sentiment classification using bidirectional LSTM"} description={"Pavan Kumar M.R., Jayagopal P., Journal of Intelligent Manufacturing, DOI: 10.1007/s10845-021-01866-0"} year={"2023"} link = {journal[3]} />
                <RowInfoComponentv4 title={"Deep learning models for predicting the position of the head on an X-ray image for Cephalometric analysis"} description={"Prasanna K.; Jyothi C.B.; Mathivanan S.K.; Jayagopal P.; Saif A.; Samuel D.J., Intelligent Data Analysis, Vol:27, Pg.No(3-27), DOI: 10.3233/IDA-237430"} year={"2023"} link = {journal[4]} />
                <RowInfoComponentv4 title={"Wireless Sensor Networks Based on Multi-Criteria Clustering and Optimal Bio-Inspired Algorithm for Energy-Efficient Routing"} description={"Vellaichamy J., Basheer S., Bai P.S.M., Khan M., Kumar Mathivanan S., Jayagopal P., Babu J.C., Applied Sciences (Switzerland), Vol:13, Issue: 5, DOI: 10.3390/app13052801"} year={"2023"} link = {journal[5]} />
                <RowInfoComponentv4 title={"A Deep Learning Approach to Detect Microsleep Using Various Forms of EEG Signal"} description={"Sangeetha S.K.B.; Mathivanan S.K.; Muthukumaran V.; Pughazendi N.; Jayagopal P.; Uddin M.S., Mathematical Problems in Engineering, Vol:2023, DOI: 10.1155/2023/7317938"} year={"2023"} link = {journal[6]} />
                <RowInfoComponentv4 title={"Simulating crop yield estimation and prediction through geospatial data for specific regional analysis"} description={"Mathivanan S.K., Jayagopal P., Earth Science Informatics, DOI: 10.1007/s12145-022-00887-4"} year={"2023"} link = {journal[7]} />
                <RowInfoComponentv4 title={"Local-Ternary-Pattern-Based Associated Histogram Equalization Technique for Cervical Cancer Detection"} description={"Srinivasan S., Raju A.B.K., Mathivanan S.K., Jayagopal P., Babu J.C., Sahu A.K., Diagnostics, Vol:13, Issue: 3, DOI: 10.3390/diagnostics13030548"} year={"2023"} link = {journal[8]} />
                <RowInfoComponentv4 title={"A Distributed Framework for Predictive Analytics Using Big Data and MapReduce Parallel Programming"} description={"Natesan P., Sathishkumar V.E., Mathivanan S.K., Venkatasen M., Jayagopal P., Allayear S.M., Mathematical Problems in Engineering, Vol:2023, DOI: 10.1155/2023/6048891"} year={"2023"} link = {journal[9]} />
                <RowInfoComponentv4 title={"Detection and Classification of Adult Epilepsy Using Hybrid Deep Learning Approach"} description={"Srinivasan S.; Dayalane S.; Mathivanan S.; Rajadurai H.; Jayagopal P.; Dalu G.T., Scientific Reports, Vol:13, Issue: 1, DOI: 10.1038/s41598-023-44763-7"} visibility = {showAll} year={"2023"} link = {journal[10]} />
                <RowInfoComponentv4 title={"Breast Cancer Classification Using Synthesized Deep Learning Model with Metaheuristic Optimization Algorithm"} description={"Thirumalaisamy S.; Thangavilou K.; Rajadurai H.; Saidani O.; Alturki N.; Mathivanan S.K.; Jayagopal P.; Gochhait S., Diagnostics, Vol:13, Issue: 18, DOI: 10.3390/diagnostics13182925"} visibility = {showAll} year={"2023"} link = {journal[11]} />
                <RowInfoComponentv4 title={"An Active Learning Machine Technique Based Prediction of Cardiovascular Heart Disease from UCI-Repository Database"} description={"Srinivasan S.; Gunasekaran S.; Mathivanan S.K.; M. B B.A.M.; Jayagopal P.; Dalu G.T., Scientific Reports, Vol:13, Issue: 1, DOI: 10.1038/s41598-023-40717-1"} visibility = {showAll} year={"2023"} link = {journal[12]} />
                <RowInfoComponentv4 title={"A Framework of Faster CRNN and VGG16-Enhanced Region Proposal Network for Detection and Grade Classification of Knee RA"} description={"Srinivasan S., Gunasekaran S., Mathivanan S.K., Jayagopal P., Khan M.A., Alasiry A., Marzougui M., Masood A., Diagnostics, Vol:13, Issue: 8, DOI: 10.3390/diagnostics13081385"} visibility = {showAll} year={"2023"} link = {journal[13]} />
                <RowInfoComponentv4 title={"An Improved MangoNet Architecture Using Harris Hawks Optimization for Fruit Classification with Uncertainty Estimation"} description={"Rajalaxmi R.R., Saradha M., Fathima S.K., Kumar V.E.S., Kumar M.S., Prabhu J., Journal of Uncertain Systems, DOI: 10.1142/S1752890922420065"} visibility = {showAll} year={"2023"} link = {journal[14]} />
                <RowInfoComponentv4 title={"Detection and Grade Classification of Diabetic Retinopathy and Adult Vitelliform Macular Dystrophy Based on Ophthalmoscopy Images"} description={"Srinivasan S., Nagarnaidu Rajaperumal R., Mathivanan S.K., Jayagopal P., Krishnamoorthy S., Kardy S., Electronics (Switzerland), Vol:12, Issue: 4, DOI: 10.3390/electronics12040862"} visibility = {showAll} year={"2023"} link = {journal[15]} />
                <RowInfoComponentv4 title={"Trajectory Planning and Collision Control of a Mobile Robot: A Penalty-Based PSO Approach"} description={"Pandey K.K., Kumbhar C., Parhi D.R., Mathivanan S.K., Jayagopal P., Haque A., Mathematical Problems in Engineering, Vol:2023, DOI: 10.1155/2023/1040461"} visibility = {showAll} year={"2023"} link = {journal[16]} />
                <RowInfoComponentv4 title={"Detection for Melanoma Skin Cancer through ACCF, BPPF, and CLF Techniques with Machine Learning Approach"} description={"Kavitha P., Ayyappan G., Jayagopal P., Mathivanan S.K., Mallik S., Al-Rasheed A., Alqahtani M.S., Soufiene B.O., BMC Bioinformatics, Vol:24, Issue: 1, DOI: 10.1186/s12859-023-05584-7"} visibility = {showAll} year={"2023"} link = {journal[17]} />
                <RowInfoComponentv4 title={"Phonetic-based Forward Online Transliteration Tool from English to Tamil Language"} description={"Anbukkarasi S., Elangovan D., Periyasamy J., Sathishkumar V.E., Sree Dharinya S., Sandeep Kumar M., Prabhu J., International Journal of Reliability, Quality and Safety Engineering, DOI: 10.1142/S021853932350002X"} visibility = {showAll} year={"2023"} link = {journal[18]} />
                <RowInfoComponentv4 title={"Classifying Distinct Emotions from Parents of ASD Child Using EEG Source Data by Combining Bernoulli–Laplace Prior and Graph Neural Networks"} description={"ArulDass S.D.; Jayagopal P., Neural Computing and Applications, DOI: 10.1007/s00521-023-09171-y"} visibility = {showAll} year={"2023"} link = {journal[19]} />
                <RowInfoComponentv4 title={"Uncertainty Quantification to Improve the Classification of Melanoma and Basal Skin Cancer Using ResNet Model"} description={"Deepa D., Muthukumaran V., Vinodhini V., Selvaraj S., Sandeep Kumar M., Prabhu J., Journal of Uncertain Systems, Vol:16, Issue: 1, DOI: 10.1142/S1752890922420107"} visibility = {showAll} year={"2023"} link = {journal[20]} />
                <RowInfoComponentv4 title={"Identifying Region Specific Seasonal Crop for Leaf Borne Diseases by Utilizing Deep Learning Techniques"} description={"Jayagopal P., Rajendran S., Mathivanan S.K., Sathish Kumar S.D., Raja K.T., Paneerselvam S., Acta Geophysica, DOI: 10.1007/s11600-022-00759-x"} visibility = {showAll} year={"2022"} link = {journal[21]} />
                <RowInfoComponentv4 title={"Diagnosis of Retinal Diseases Based on Bayesian Optimization Deep Learning Network Using Optical Coherence Tomography Images"} description={"Subramanian M., Kumar M.S., Sathishkumar V.E., Prabhu J., Karthick A., Ganesh S.S., Meem M.A., Computational Intelligence and Neuroscience, Vol:2022, DOI: 10.1155/2022/8014979"} visibility = {showAll} year={"2022"} link = {journal[22]} />
                <RowInfoComponentv4 title={"Weather-based Maize Yield Forecast in Saudi Arabia Using Statistical Analysis and Machine Learning"} description={"Jayagopal P., Muthukumaran V., Koti M.S., Kumar S.S., Rajendran S., Mathivanan S.K., Acta Geophysica, DOI: 10.1007/s11600-022-00854-z"} visibility = {showAll} year={"2022"} link = {journal[23]} />
                <RowInfoComponentv4 title={"Imbalanced Classification in Diabetics Using Ensembled Machine Learning"} description={"Kumar M.S., Khan M.Z., Rajendran S., Noor A., Dass A.S., Prabhu J., Computers, Materials and Continua, Vol:72, Issue: 3, Pg.No(4397-4409), DOI: 10.32604/cmc.2022.025865"} visibility = {showAll} year={"2022"} link = {journal[24]} />
                <RowInfoComponentv4 title={"Identifying Complex Emotions in Alexithymia Affected Adolescents Using Machine Learning Techniques"} description={"ArulDass S.D., Jayagopal P., Diagnostics, Vol:12, Issue: 12, DOI: 10.3390/diagnostics12123188"} visibility = {showAll} year={"2022"} link = {journal[25]} />
                <RowInfoComponentv4 title={"Influences of Aqueous Nanofluid Emulsion on Diesel Engine Performance, Combustion, and Emission: IoT (Emission Monitoring System)"} description={"Venkatesh B., Babu J.C., Mathivanan S.K., Jayagopal P., Prasanna S., Uddin M.S., Advances in Materials Science and Engineering, Vol:2022, DOI: 10.1155/2022/8470743"} visibility = {showAll} year={"2022"} link = {journal[26]} />
                <RowInfoComponentv4 title={"COVID-19 Detection Based on Lung CT Scan Using Deep Learning Techniques"} description={"Kogilavani S.V., Prabhu J., Sandhiya R., Kumar M.S., Subramaniam U., Karthick A., Muhibbullah M., Imam S.B.S., Computational and Mathematical Methods in Medicine, Vol:2022, Pg.No(7672196-), DOI: 10.1155/2022/7672196"} visibility = {showAll} year={"2022"} link = {journal[27]} />
                <RowInfoComponentv4 title={"Investigation of Applying Machine Learning and Hyperparameter Tuned Deep Learning Approaches for Arrhythmia Detection in ECG Images"} description={"Shanmugavadivel K., Sathishkumar V.E., Kumar M.S., Maheshwari V., Prabhu J., Allayear S.M., Computational and Mathematical Methods in Medicine, Vol:2022, DOI: 10.1155/2022/8571970"} visibility = {showAll} year={"2022"} link = {journal[28]} />
                <RowInfoComponentv4 title={"Feature Learning-Based Generative Adversarial Network Data Augmentation for Class-Based Few-Shot Learning"} description={"Subedi B., Sathishkumar V.E., Maheshwari V., Kumar M.S., Jayagopal P., Allayear S.M., Mathematical Problems in Engineering, Vol:2022, DOI: 10.1155/2022/9710667"} visibility = {showAll} year={"2022"} link = {journal[29]} />
                <RowInfoComponentv4 title={"A Preprocessing Method Combined with an Ensemble Framework for Multiclass Imbalanced Data Classification"} description={"Pavan Kumar M.R., Jayagopal P., International Journal of Computers and Applications, DOI: 10.1080/1206212X.2019.1700335"} visibility = {showAll} year={"2022"} link = {journal[30]} />
                <RowInfoComponentv4 title={"Diagnosing Breast Cancer Based on the Adaptive Neuro-Fuzzy Inference System"} description={"Chidambaram S., Ganesh S.S., Karthick A., Jayagopal P., Balachander B., Manoharan S., Computational and Mathematical Methods in Medicine, Vol:2022, DOI: 10.1155/2022/9166873"} visibility = {showAll} year={"2022"} link = {journal[31]} />
                <RowInfoComponentv4 title={"Design and Analysis of Multilayered Neural Network-Based Intrusion Detection System in the Internet of Things Network"} description={"Sangeetha S.K.B., Mani P., Maheshwari V., Jayagopal P., Sandeep Kumar M., Allayear S.M., Computational Intelligence and Neuroscience, Vol:2022, DOI: 10.1155/2022/9423395"} visibility = {showAll} year={"2022"} link = {journal[32]} />
                <RowInfoComponentv4 title={"Utilizing Satellite and UAV Data for Crop Yield Prediction and Monitoring Through Deep Learning"} description={"Mathivanan S.K., Jayagopal P., Acta Geophysica, DOI: 10.1007/s11600-022-00911-7"} visibility = {showAll} year={"2022"} link = {journal[33]} />
                <RowInfoComponentv4 title={"Detection and Classification of Tomato Crop Disease Using Convolutional Neural Network"} description={"Sakkarvarthi G., Sathianesan G.W., Murugan V.S., Reddy A.J., Jayagopal P., Elsisi M., Electronics (Switzerland), Vol:11, Issue: 21, DOI: 10.3390/electronics11213618"} visibility = {showAll} year={"2022"} link = {journal[34]} />
                <RowInfoComponentv4 title={"IoT-Based Intelligent System for Internal Crack Detection in Building Blocks"} description={"Babu J.C., Kumar M.S., Jayagopal P., Sathishkumar V.E., Rajendran S., Kumar S., Karthick A., Mahseena A.M., Journal of Nanomaterials, Vol:2022, DOI: 10.1155/2022/3947760"} visibility = {showAll} year={"2022"} link = {journal[35]} />
                <RowInfoComponentv4 title={"Emphasizing Privacy and Security of Edge Intelligence with Machine Learning for Healthcare"} description={"Rajendran S., Mathivanan S.K., Jayagopal P., Purushothaman Janaki K., Manickam Bernard B.A.M., Pandy S., Sorakaya Somanathan M., International Journal of Intelligent Computing and Cybernetics, DOI: 10.1108/IJICC-05-2021-0099"} visibility = {showAll} year={"2022"} link = {journal[36]} />
                <RowInfoComponentv4 title={"Relevant-Based Feature Ranking (RBFR) Method for Text Classification Based on Machine Learning Algorithm"} description={"Jasti V.D.P., Kumar G.K., Kumar M.S., Maheshwari V., Jayagopal P., Pant B., Karthick A., Muhibbullah M., Journal of Nanomaterials, Vol:2022, DOI: 10.1155/2022/9238968"} visibility = {showAll} year={"2022"} link = {journal[37]} />
                <RowInfoComponentv4 title={"An Enhanced Triadic Color Scheme for Content-Based Image Retrieval"} description={"Sangeetha S.K.B., Mathivanan S.K., Pandi T., Arivu Selvan K., Jayagopal P., Teshite Dalu G., Mathematical Problems in Engineering, Vol:2022, DOI: 10.1155/2022/5736630"} visibility = {showAll} year={"2022"} link = {journal[38]} />
                <RowInfoComponentv4 title={"Language Dialect-Based Speech Emotion Recognition Through Deep Learning Techniques"} description={"Rajendran S., Mathivanan S.K., Jayagopal P., Venkatasen M., Pandi T., Sorakaya Somanathan M., Thangaval M., Mani P., International Journal of Speech Technology, DOI: 10.1007/s10772-021-09838-8"} visibility = {showAll} year={"2021"} link = {journal[39]} />
                <RowInfoComponentv4 title={"Trust-Based Authentication Scheme (TBAS) for Cloud Computing Environment with Kerberos Protocol Using Distributed Controller and Prevention Attack"} description={"Anbu Malar M.B.B., J P., International Journal of Pervasive Computing and Communications, DOI: 10.1108/IJPCC-03-2020-0009"} visibility = {showAll} year={"2021"} link = {journal[40]} />
                <RowInfoComponentv4 title={"Detection and Localisation of Cars in Indoor Parking Through UWB Radar-Based Sensing System"} description={"Rajendran S., Mathivanan S.K., Somanathan M.S., Geetha M., Jayagopal P., Venkatasen M., Mani P., Christopher J., International Journal of Ultra Wideband Communications and Systems, Vol:4, Issue: 44289, Pg.No(182-190), DOI: 10.1504/IJUWBCS.2021.119137"} visibility = {showAll} year={"2021"} link = {journal[41]} />
                <RowInfoComponentv4 title={"Accessing Covid19 Epidemic Outbreak in Tamilnadu and the Impact of Lockdown Through Epidemiological Models and Dynamic Systems"} description={"Rajendran S., Jayagopal P., Measurement: Journal of the International Measurement Confederation, Vol:169, DOI: 10.1016/j.measurement.2020.108432"} visibility = {showAll} year={"2021"} link = {journal[42]} />
                <RowInfoComponentv4 title={"Delineation of Field Boundary from Multispectral Satellite Images Through U-Net Segmentation and Template Matching"} description={"M S.K., Jayagopal P., Ecological Informatics, Vol:64, DOI: 10.1016/j.ecoinf.2021.101370"} visibility = {showAll} year={"2021"} link = {journal[43]} />
                <RowInfoComponentv4 title={"A Hybrid Threat Model for System-Centric and Attack-Centric for Effective Security Design in SDLC"} description={"Viswanathan G., Prabhu P.J., Web Intelligence, Vol:19, Issue: 44228, Pg.No(1-11), DOI: 10.3233/WEB-210452"} visibility = {showAll} year={"2021"} link = {journal[44]} />
                <RowInfoComponentv4 title={"Remote Monitoring of Indoor/Outdoor Movement in Epidemiological Situations Utilizing UWB Transceivers"} description={"Rajendran S., Jayagopal P., Mathivanan S.K., Prasanna S., Manivannan S.S., Kumar P.J., Venkatasen M., Mani P., International Journal of Ultra Wideband Communications and Systems, Vol:4, Issue: 44289, Pg.No(124-133), DOI: 10.1504/IJUWBCS.2021.119132"} visibility = {showAll} year={"2021"} link = {journal[45]} />
                <RowInfoComponentv4 title={"Multi-Class Imbalanced Image Classification Using Conditioned GANs"} description={"Pavan Kumar M.R., Jayagopal P., International Journal of Multimedia Information Retrieval, DOI: 10.1007/s13735-021-00213-6"} visibility = {showAll} year={"2021"} link = {journal[46]} />
                <RowInfoComponentv4 title={"Effectiveness of Contact Tracing Using KNN for COVID-19"} description={"Venkatasen M., Mathivanan S.K., Mani P., Jayagopal P., Thanapal P., Somanathan M.S., Upendra Babu K., Elangovan D., Journal of Mobile Multimedia, Vol:17, Issue: 4, Pg.No(789-808), DOI: 10.13052/jmm1550-4646.17415"} visibility = {showAll} year={"2021"} link = {journal[47]} />
                <RowInfoComponentv4 title={"Generative Adversarial Networks: A Survey on Applications and Challenges"} description={"Pavan Kumar M.R., Jayagopal P., International Journal of Multimedia Information Retrieval, DOI: 10.1007/s13735-020-00196-w"} visibility = {showAll} year={"2021"} link = {journal[48]} />
                <RowInfoComponentv4 title={"Queueing Network Model with Jockeying to Reduce the Waiting Time in the Airport"} description={"Priya K.B., Kumar M.S., Geetha M., Prabhu J., Maheshwari V., Rajendran S., Prasanna M., Rajendran P., International Journal of System of Systems Engineering, Vol:11, Issue: 03-Apr, Pg.No(363-379), DOI: 10.1504/IJSSE.2021.121471"} visibility = {showAll} year={"2021"} link = {journal[49]} />
                <RowInfoComponentv4 title={"Forecasting of the SARS-CoV-2 Epidemic in India Using SIR Model, Flatten Curve and Herd Immunity"} description={"Venkatasen M., Mathivanan S.K., Jayagopal P., Mani P., Rajendran S., Subramaniam U.S., Ramalingam A.C., Rajasekaran V.A., Indirajithu A., Sorakaya Somanathan M., Journal of Ambient Intelligence and Humanized Computing, DOI: 10.1007/s12652-020-02641-4"} visibility = {showAll} year={"2020"} link = {journal[50]} />
                <RowInfoComponentv4 title={"Hybrid Coherent Encryption Scheme for Multimedia Big Data Management Using Cryptographic Encryption Methods"} description={"Stephen Dass A., Prabhu J., International Journal of Grid and Utility Computing, Vol:11, Issue: 4, Pg.No(496-508)"} visibility = {showAll} year={"2020"} link = {journal[51]} />
                <RowInfoComponentv4 title={"Learnability of Interestingness with Semantic Similarity and Reasoning in the Knowledge Base of Decision Support Systems"} description={"Rajendran S., Prabhu J., International Journal of Web Portals, Vol:12, Issue: 1, Pg.No(26-44), DOI: 10.4018/IJWP.2020010103"} visibility = {showAll} year={"2020"} link = {journal[52]} />
                <RowInfoComponentv4 title={"Pediatric and Geriatric Immunity Network Mobile Computational Model for COVID-19"} description={"Priya K.B., Rajendran P., Sandeep Kumar M., Prabhu J., Rajendran S., Kumar P.J., Thanapal P., Christopher J., International Journal of Pervasive Computing and Communications, DOI: 10.1108/IJPCC-06-2020-0054"} visibility = {showAll} year={"2020"} link = {journal[53]} />
                <RowInfoComponentv4 title={"Survey of Methodologies for Quantifying Software Reliability"} description={"Viswanathan G., Prabhu J., International Journal of Internet Technology and Secured Transactions, Vol:10, Issue: 5, Pg.No(565-575), DOI: 10.1504/IJITST.2020.109535"} visibility = {showAll} year={"2020"} link = {journal[54]} />
                <RowInfoComponentv4 title={"Learning Models for Concept Extraction from Images with Drug Labels for a Unified Knowledge Base Utilizing NLP and IoT Tasks"} description={"Rajendran S., Prabhu J., International Journal of Information Technology and Web Engineering, Vol:15, Issue: 3, Pg.No(18-33)"} visibility = {showAll} year={"2020"} link = {journal[55]} />
                <RowInfoComponentv4 title={"A Hybrid Model Collaborative Movie Recommendation System Using K-Means Clustering with Ant Colony Optimisation"} description={"Sandeep Kumar M., Prabhu J., International Journal of Internet Technology and Secured Transactions, Vol:10, Issue: 3, Pg.No(337-354), DOI: 10.1504/IJITST.2020.107079"} visibility = {showAll} year={"2020"} link = {journal[56]} />
                <RowInfoComponentv4 title={"Social Economic Impact of COVID-19 Outbreak in India"} description={"M S.K., V M., J P., M P., P J., P S., M.B B.A.M., Jothikumar R., International Journal of Pervasive Computing and Communications, DOI: 10.1108/IJPCC-06-2020-0053"} visibility = {showAll} year={"2020"} link = {journal[57]} />
                <RowInfoComponentv4 title={"IoT Role in Prevention of COVID-19 and Health Care Workforces' Behavioral Intention in India - An Empirical Examination"} description={"R V.A., J P., P J K., SS M., Rajendran S., Kumar K.R., S S., Jothikumar R., International Journal of Pervasive Computing and Communications, 2020"} visibility = {showAll} year={"2020"} link = {journal[58]} />
                <RowInfoComponentv4 title={"Preserving Learnability and Intelligibility at the Point of Care with Assimilation of Different Speech Recognition Techniques"} description={"Rajendran S., Jayagopal P., International Journal of Speech Technology, Vol:23, Issue: 2, Pg.No(265-276), DOI: 10.1007/s10772-020-09687-x, 2020"} visibility = {showAll} year={"2020"} link = {journal[59]} />
                <RowInfoComponentv4 title={"Data Storage Security in the Cloud Environment Using the Honey Pot System"} description={"Malar B.A., Prabhu J., International Journal of e-Collaboration, Vol:16, Issue: 4, Pg.No(1-14), DOI: 10.4018/IJeC.2020100101, 2020"} visibility = {showAll} year={"2020"} link = {journal[60]} />
                <RowInfoComponentv4 title={"A Distributed Collaborative Trust Service Recommender System for Secure Cloud Computing"} description={"Benjula Anbu Malar M.B., Prabhu J., Transactions on Emerging Telecommunications Technologies, DOI: 10.1002/ett.3991, 2020"} visibility = {showAll} year={"2020"} link = {journal[61]} />
                <RowInfoComponentv4 title={"Image Distribution with Scalable Access Control for Privacy in Social Network"} description={"Vijay Anand R., Prabhu J., Kumar P.J., Kiruba Thangam R., Muthamilselvan T., International Journal of Innovative Technology and Exploring Engineering, Vol:8, Issue: 10, Pg.No(2191-2194), DOI: 10.35940/ijitee.J9409.0881019, 2019-2019"} visibility = {showAll} year={"2019"} link = {journal[62]} />
                <RowInfoComponentv4 title={"Ameliorating the Privacy on Large Scale Aviation Dataset by Implementing MapReduce Multidimensional Hybrid K-Anonymization"} description={"Stephen Dass A., Prabhu J., International Journal of Web Portals, Vol:11, Issue: 2, Pg.No(14-40), DOI: 10.4018/IJWP.2019070102, 2019"} visibility = {showAll} year={"2019"} link = {journal[63]} />
                <RowInfoComponentv4 title={"Hybrid Model for Movie Recommendation System Using Fireflies and Fuzzy C-Means"} description={"Sandeep Kumar M., Prabhu J., International Journal of Web Portals, Vol:11, Issue: 2, Pg.No(1-13), DOI: 10.4018/IJWP.2019070101, 2019"} visibility = {showAll} year={"2019"} link = {journal[64]} />
                <RowInfoComponentv4 title={"Analysis of Heterogeneous Device Characteristics in Round Robin Based Load Balancing Algorithm with Closest Data Center as Service Broker Policy in Cloud"} description={"Kumar P.J., Sivakumar N., Prabhu J., Ramesh P.S., Suganya P., International Journal of Innovative Technology and Exploring Engineering, Vol:8, Issue: 9, Pg.No(1627-1630), 2019"} visibility = {showAll} year={"2019"} link = {journal[65]} />
                <RowInfoComponentv4 title={"An Analysis of Security Issues in Cloud Computing"} description={"Malar M.B.B.A., Prabhu J., International Journal of Civil Engineering and Technology, Vol:10, Issue: 2, Pg.No(2138-2153), 2019"} visibility = {showAll} year={"2019"} link = {journal[66]} />
                <RowInfoComponentv4 title={"An Analysis on ECSE Load Balancing Algorithm with CDC as a Service Broker Policy in Cloud with Heterogeneous Communication and Device Characteristics"} description={"Kumar P.J., Prabhu J., Sivakumar N., Ramesh P.S., Suganya P., International Journal of Innovative Technology and Exploring Engineering, Vol:8, Issue: 9, Pg.No(1631-1635), 2019"} visibility = {showAll} year={"2019"} link = {journal[67]} />
                <RowInfoComponentv4 title={"Secured Service Chains Tuned Resource Sharing Using NSDP"} description={"Vijayanand R., Prabhu J., Muthamilselvan T., Thanapal P., Manivannan S.S., International Journal of Innovative Technology and Exploring Engineering, Vol:8, Issue: 10, Pg.No(2195-2198), DOI: 10.35940/ijitee.J9410.0881019, 2019"} visibility = {showAll} year={"2019"} link = {journal[68]} />
                <RowInfoComponentv4 title={"Role of Sentiment Classification in Sentiment Analysis: A Survey"} description={"Pavan Kumar M.R., Prabhu J., Annals of Library and Information Studies, Vol:65, Issue: 3, Pg.No(196-209), 2018"} visibility = {showAll} year={"2018"} link = {journal[69]} />
                <RowInfoComponentv4 title={"Self Service Software"} description={"Vijay Anand R., Prabhu J., Jayalakshmi P., Journal of Advanced Research in Dynamical and Control Systems, Vol:10, Pg.No(1659-1666), 2018"} visibility = {showAll} year={"2018"} link = {journal[70]} />
                <RowInfoComponentv4 title={"Research and Development of Virtualization in Wireless Sensor Networks"} description={"Sandeep Kumar M., Prabhu J., International Journal on Informatics Visualization, Vol:2, Issue: 2, Pg.No(96-103), DOI: 10.30630/joiv.2.2.118, 2018"} visibility = {showAll} year={"2018"} link = {journal[71]} />
                <RowInfoComponentv4 title={"Comparison of Multi-Criteria Recommendation System for Improving Accurate Prediction"} description={"Sandeepkumar M., Prabhu J., Journal of Advanced Research in Dynamical and Control Systems, Vol:10, Pg.No(1535-1542), 2018"} visibility = {showAll} year={"2018"} link = {journal[72]} />
                <RowInfoComponentv4 title={"Comparison of NoSQL Database and Traditional Database - An Emphatic Analysis"} description={"Sandeep Kumar M., Prabhu J., International Journal on Informatics Visualization, Vol:2, Issue: 2, Pg.No(51-55), DOI: 10.30630/joiv.2.2.58, 2018"} visibility = {showAll} year={"2018"} link = {journal[73]} />
                <RowInfoComponentv4 title={"Diagnosing Breast Cancer Based on the Adaptive Neuro-Fuzzy Inference System"} description={"Chidambaram S., Ganesh S.S., Karthick A., Jayagopal P., Balachander B., Manoharan S., Computational and Mathematical Methods in Medicine, Vol:2022, DOI: 10.1155/2022/9166873"} visibility = {showAll} year={"2022"} link = {journal[74]} />
                <RowInfoComponentv4 title={"Design and Analysis of Multilayered Neural Network-Based Intrusion Detection System in the Internet of Things Network"} description={"Sangeetha S.K.B., Mani P., Maheshwari V., Jayagopal P., Sandeep Kumar M., Allayear S.M., Computational Intelligence and Neuroscience, Vol:2022, DOI: 10.1155/2022/9423395"} visibility = {showAll} year={"2022"} link = {journal[75]} />
                <RowInfoComponentv4 title={"Utilizing Satellite and UAV Data for Crop Yield Prediction and Monitoring Through Deep Learning"} description={"Mathivanan S.K., Jayagopal P., Acta Geophysica, DOI: 10.1007/s11600-022-00911-7"} visibility = {showAll} year={"2022"} link = {journal[76]} />
                <RowInfoComponentv4 title={"Detection and Classification of Tomato Crop Disease Using Convolutional Neural Network"} description={"Sakkarvarthi G., Sathianesan G.W., Murugan V.S., Reddy A.J., Jayagopal P., Elsisi M., Electronics (Switzerland), Vol:11, Issue: 21, DOI: 10.3390/electronics11213618"} visibility = {showAll} year={"2022"} link = {journal[77]} />
                <RowInfoComponentv4 title={"IoT-Based Intelligent System for Internal Crack Detection in Building Blocks"} description={"Babu J.C., Kumar M.S., Jayagopal P., Sathishkumar V.E., Rajendran S., Kumar S., Karthick A., Mahseena A.M., Journal of Nanomaterials, Vol:2022, DOI: 10.1155/2022/3947760"} visibility = {showAll} year={"2022"} link = {journal[78]} />
                <RowInfoComponentv4 title={"Emphasizing Privacy and Security of Edge Intelligence with Machine Learning for Healthcare"} description={"Rajendran S., Mathivanan S.K., Jayagopal P., Purushothaman Janaki K., Manickam Bernard B.A.M., Pandy S., Sorakaya Somanathan M., International Journal of Intelligent Computing and Cybernetics, DOI: 10.1108/IJICC-05-2021-0099"} visibility = {showAll} year={"2022"} link = {journal[79]} />
                <RowInfoComponentv4 title={"Relevant-Based Feature Ranking (RBFR) Method for Text Classification Based on Machine Learning Algorithm"} description={"Jasti V.D.P., Kumar G.K., Kumar M.S., Maheshwari V., Jayagopal P., Pant B., Karthick A., Muhibbullah M., Journal of Nanomaterials, Vol:2022, DOI: 10.1155/2022/9238968"} visibility = {showAll} year={"2022"} link = {journal[80]} />
                <RowInfoComponentv4 title={"An Enhanced Triadic Color Scheme for Content-Based Image Retrieval"} description={"Sangeetha S.K.B., Mathivanan S.K., Pandi T., Arivu Selvan K., Jayagopal P., Teshite Dalu G., Mathematical Problems in Engineering, Vol:2022, DOI: 10.1155/2022/5736630"} visibility = {showAll} year={"2022"} link = {journal[81]} />
                <RowInfoComponentv4 title={"Language Dialect-Based Speech Emotion Recognition Through Deep Learning Techniques"} description={"Rajendran S., Mathivanan S.K., Jayagopal P., Venkatasen M., Pandi T., Sorakaya Somanathan M., Thangaval M., Mani P., International Journal of Speech Technology, DOI: 10.1007/s10772-021-09838-8"} visibility = {showAll} year={"2021"} link = {journal[82]} />
                <RowInfoComponentv4 title={"Trust-Based Authentication Scheme (TBAS) for Cloud Computing Environment with Kerberos Protocol Using Distributed Controller and Prevention Attack"} description={"Anbu Malar M.B.B., J P., International Journal of Pervasive Computing and Communications, DOI: 10.1108/IJPCC-03-2020-0009"} visibility = {showAll} year={"2021"} link = {journal[83]} />
                <RowInfoComponentv4 title={"Detection and Localisation of Cars in Indoor Parking Through UWB Radar-Based Sensing System"} description={"Rajendran S., Mathivanan S.K., Somanathan M.S., Geetha M., Jayagopal P., Venkatasen M., Mani P., Christopher J., International Journal of Ultra Wideband Communications and Systems, Vol:4, Issue: 44289, Pg.No(182-190), DOI: 10.1504/IJUWBCS.2021.119137"} visibility = {showAll} year={"2021"} link = {journal[84]} />
                <RowInfoComponentv4 title={"Accessing Covid19 Epidemic Outbreak in Tamilnadu and the Impact of Lockdown Through Epidemiological Models and Dynamic Systems"} description={"Rajendran S., Jayagopal P., Measurement: Journal of the International Measurement Confederation, Vol:169, DOI: 10.1016/j.measurement.2020.108432"} visibility = {showAll} year={"2021"} link = {journal[85]} />
                <RowInfoComponentv4 title={"Delineation of Field Boundary from Multispectral Satellite Images Through U-Net Segmentation and Template Matching"} description={"M S.K., Jayagopal P., Ecological Informatics, Vol:64, DOI: 10.1016/j.ecoinf.2021.101370"} visibility = {showAll} year={"2021"} link = {journal[86]} />
                <RowInfoComponentv4 title={"A Hybrid Threat Model for System-Centric and Attack-Centric for Effective Security Design in SDLC"} description={"Viswanathan G., Prabhu P.J., Web Intelligence, Vol:19, Issue: 44228, Pg.No(1-11), DOI: 10.3233/WEB-210452"} visibility = {showAll} year={"2021"} link = {journal[87]} />
                <RowInfoComponentv4 title={"Remote Monitoring of Indoor/Outdoor Movement in Epidemiological Situations Utilizing UWB Transceivers"} description={"Rajendran S., Jayagopal P., Mathivanan S.K., Prasanna S., Manivannan S.S., Kumar P.J., Venkatasen M., Mani P., International Journal of Ultra Wideband Communications and Systems, Vol:4, Issue: 44289, Pg.No(124-133), DOI: 10.1504/IJUWBCS.2021.119132"} visibility = {showAll} year={"2021"} link = {journal[87]} />
                <RowInfoComponentv4 title={"Multi-Class Imbalanced Image Classification Using Conditioned GANs"} description={"Pavan Kumar M.R., Jayagopal P., International Journal of Multimedia Information Retrieval,DOI: 10.1007/s13735-021-00213-6"} visibility = {showAll} year={"2021"} link = {journal[88]} />

                <button className="btn btnBlack centet_both" onClick={()=>hideShowClick()}>{showAll == "hide" ? "View All" : "View Less"}</button>
            </div>
    );
}