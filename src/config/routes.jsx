import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
    AudiSportOverview,
    Audifootball,
    Audimotorsport,
    AudiwinterSport,
    CareersOverview,
    Graduates,
    JobPortal,
    KarriereImAutohaus,
    Professional,
    SchoolStudents,
    Students,
    WorkingAtAudi,
    CompanyOverview,
    CompilanceRiskManagement,
    InvestorRelations,
    PressMedia,
    Strategy,
    Profile,
    InnovationOverview,
    AcademicCooperation,
    Design,
    Digitalization,
    FutureTechnologie,
    ProductInnovation,
    MeticulouDetail,
    SustainabilityOverview,
    EnvironmentAndResources,
    PeopleAndSociety,
    EthicalLeadership,
    SustainabilityConcept
} from '../Screen'
import MenuLayout from '../Components/MenuLayout/MenuLayout'
import allPaths from './paths'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route Component={MenuLayout}>
                <Route path={allPaths.HOME} element={<MeticulouDetail />} />
                <Route path={allPaths.CAREERS} element={<CareersOverview />} />
                <Route path={allPaths.GRADUATES} element={<Graduates />} />
                <Route path={allPaths.JOB_PORTAL} element={<JobPortal />} />
                <Route path={allPaths.KARRIERE_IM_AUTOHAUS} element={<KarriereImAutohaus />} />
                <Route path={allPaths.PROFESSIONALS} element={<Professional />} />
                <Route path={allPaths.SCHOOL_STUDENTS} element={<SchoolStudents />} />
                <Route path={allPaths.STUDENTS} element={<Students />} />
                <Route path={allPaths.WORKING_AT_AUD} element={<WorkingAtAudi />} />
                <Route path={allPaths.COMPANY} element={<CompanyOverview />} />
                <Route path={allPaths.COMPILANCE_RISK_MANAGEMENT} element={<CompilanceRiskManagement />} />
                <Route path={allPaths.INVESTOR_RELATION} element={<InvestorRelations />} />
                <Route path={allPaths.PRESS_MEDIA} element={<PressMedia />} />
                <Route path={allPaths.STRATEGY} element={<Strategy />} />
                <Route path={allPaths.PROFILE} element={<Profile />} />
                <Route path={allPaths.INNOVATION} element={<InnovationOverview />} />
                <Route path={allPaths.ACADEMIC_COOPERATION} element={<AcademicCooperation />} />
                <Route path={allPaths.DESIGN} element={<Design />} />
                <Route path={allPaths.DIGITALIZATION} element={<Digitalization />} />
                <Route path={allPaths.FUTURE_TECHNOLOGIES} element={<FutureTechnologie />} />
                <Route path={allPaths.PRODUCT_INNOVATION} element={<ProductInnovation />} />
                <Route path={allPaths.SUSTAINABILITY} element={<SustainabilityOverview />} />
                <Route path={allPaths.ENVIRONMENT_AND_RESOURCES} element={<EnvironmentAndResources />} />
                <Route path={allPaths.PEOPLE_AND_SOCIETY} element={<PeopleAndSociety />} />
                <Route path={allPaths.ETHICAL_LEADERSHIP} element={<EthicalLeadership />} />
                <Route path={allPaths.SUSTAINABILITY_CONCEPT} element={<SustainabilityConcept />} />
                <Route path={allPaths.AUDIINSPORT} element={<AudiSportOverview />} />
                <Route path={allPaths.AUDI_FOOTBALL} element={<Audifootball />} />
                <Route path={allPaths.AUDI_MOTORSPORT} element={<Audimotorsport />} />
                <Route path={allPaths.AUDI_WINTERSPORT} element={<AudiwinterSport />} />
                </Route>
            </Routes>
        </Router>
    )
}

export { AppRoutes }